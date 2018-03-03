import React, { Component } from 'react'
import PropTypes from 'prop-types'
import root from 'window-or-global'
import Header from '../Header'
import Footer from '../Footer'
import classNames from 'classnames'
import throttle from 'lodash.throttle'
import './styles.scss'

const pageStyles = {
  entering: { position: 'absolute', zIndex: -1 },
  entered: { position: 'relative',  zIndex: 1 },
  exiting: { position: 'absolute', zIndex: 0 },
  exited: { zIndex: -1, position: 'absolute' }
}

const TOP_THRESHOLD = 300 //px

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAtBottom: false,
      isAtTop: false,
      isMobileMenuOpen: false,
    }

    this.onLayout = this.onLayout.bind(this)
    this.onScroll = this.onScroll.bind(this)
    this.triggerMobileMenu = this.triggerMobileMenu.bind(this)
  }

  getChildContext() {
    return { transitionState: this.props.transitionState }
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.onScroll, 100))
    window.addEventListener('resize', this.onLayout)
    this.onLayout()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', throttle(this.onScroll, 100))
    window.removeEventListener('resize', this.onLayout)
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
    const { isAtBottom, isAtTop } = this.state
    const viewLocation = this.viewHeight + window.pageYOffset

    if (!this.page) { return }

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

    if (window.pageYOffset <= TOP_THRESHOLD && !isAtTop) {
      this.setState(prevState => {
        return { isAtTop: !prevState.isAtTop }
      })
    }

    if (window.pageYOffset > TOP_THRESHOLD && isAtTop) {
      this.setState(prevState => {
        return { isAtTop: !prevState.isAtTop }
      })
    }
  }

  onLayout() {
    this.pageHeight = document.body.offsetHeight
    this.viewHeight = window.innerHeight
    this.onScroll()
  }

  triggerMobileMenu() {
    this.setState(prevState => {
      return {
        isMobileMenuOpen: !prevState.isMobileMenuOpen
      }
    })
  }

  render() {
    const { name, children, transitionState } = this.props
    const { isAtTop, isAtBottom, isMobileMenuOpen } = this.state

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
          mode={(isAtBottom || isAtTop) ? 'full' : 'collapsed'}
          isMobileMenuOpen={isMobileMenuOpen}
          isAtBottom={isAtBottom}
          triggerMobileMenu={this.triggerMobileMenu}
        />
        {children}
        <Footer />
      </div>
    ]
  }
}

Page.childContextTypes = {
  transitionState: PropTypes.string
}

export default Page
