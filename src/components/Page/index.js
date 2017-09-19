import React, { Component } from 'react'
import PropTypes from 'prop-types'
import root from 'window-or-global'
import classNames from 'classnames'
import Header from '../Header'
import throttle from 'lodash.throttle'
import './styles.scss'

const pageStyles = {
  entering: { display: 'block', zIndex: 1 },
  entered: { display: 'block', zIndex: 1 },
  exiting: { display: 'block', zIndex: 1 },
  exited: { display: 'none', zIndex: -1 }
}

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAtBottom: false,
      isAtTop: false,
      forceRevealed: false,
    }

    this.onLayout = this.onLayout.bind(this)
    this.onScroll = this.onScroll.bind(this)
    this.handleReveal = this.handleReveal.bind(this)
  }

  getChildContext() {
    return { transitionState: this.props.transitionState }
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.onScroll, 100))
    window.addEventListener('resize', this.onLayout)
    window.addEventListener('layout', this.onLayout)
    this.onLayout()
  }

  componentWillUnmount() {
    window.addEventListener('scroll', throttle(this.onScroll, 100))
    window.removeEventListener('resize', this.onLayout)
    window.removeEventListener('layout', this.onLayout)
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.transitionState === 'entering' &&
      this.props.transitionState === 'entered'
    ) {
      root.scrollTo(0, 0)
    }
  }

  onScroll() {
    const { forceRevealed, isAtBottom, isAtTop } = this.state
    const viewLocation = this.viewHeight + window.pageYOffset

    if (!this.page) { return }

    if (forceRevealed) {
      this.setState({
        forceRevealed: !forceRevealed
      })
    }

    if (viewLocation >= this.pageHeight && !isAtBottom) {
      this.setState(prevState => {
        return { isAtBottom: !prevState.isAtBottom }
      })
    }

    if (viewLocation < this.pageHeight && isAtBottom) {
      this.setState(prevState => {
        return { isAtBottom: !prevState.isAtBottom }
      })
    }

    if (window.pageYOffset <= 0 && !isAtTop) {
      this.setState(prevState => {
        return { isAtTop: !prevState.isAtTop }
      })
    }

    if (window.pageYOffset > 0 && isAtTop) {
      this.setState(prevState => {
        return { isAtTop: !prevState.isAtTop }
      })
    }
  }

  handleReveal() {
    this.setState({
      forceRevealed: true,
    })
  }

  onLayout() {
    this.pageHeight = document.body.offsetHeight
    this.viewHeight = window.innerHeight
    this.onScroll()
  }

  render() {
    const { name, children, transitionState } = this.props
    const { isAtTop, isAtBottom, forceRevealed } = this.state

    return [
      <div
        className={classNames('Revealer', transitionState && 'is-active')}
        key="revealer"
      >
        <div className="Revealer-layer" />
        <div className="Revealer-layer" />
      </div>,
      <div
        className="Page"
        key="page"
        style={pageStyles[transitionState]}
        ref={ref => {
          this.page = ref
        }}
      >
        <Header
          activePage={name}
          mode={forceRevealed ? 'full' : isAtTop || isAtBottom ? 'full' : 'collapsed'}
          handleReveal={this.handleReveal}
        />
        {children}
      </div>
    ]
  }
}

Page.childContextTypes = {
  transitionState: PropTypes.string
}

export default Page
