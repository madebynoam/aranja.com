import React, { Component } from 'react'
import PropTypes from 'prop-types'
import root from 'window-or-global'
import classNames from 'classnames'
import Header from '../Header'
import Footer from '../Footer'
import './styles.css'

// 100% right
// -100% left

const defaultStylesUp = {
  transition: `transform ${1000}ms cubic-bezier(0.7, 0, 0.3, 1)`,
  transform: 'translateY(100%)'
}
const defaultStylesRight = {
  transition: `transform ${1000}ms cubic-bezier(0.7, 0, 0.3, 1)`,
  transform: 'translateX(-100%)'
}

const revealStylesUp = {
  entering: { transform: 'translateY(-100%)' },
  entered: { transform: 'translateY(-100%)' },
  exiting: { transform: 'translateY(100%)', transition: 'transform 0s' },
  exited: { transform: 'translateY(100%)', transition: 'transform 0s' }
}

const revealStylesRight = {
  entering: { transform: 'translateX(100%)' },
  entered: { transform: 'translateX(100%)' },
  exiting: { transform: 'translateX(-100%)', transition: 'transform 0s' },
  exited: { transform: 'translateX(-100%)', transition: 'transform 0s' }
}

const pageStyles = {
  entering: { zIndex: 2 },
  entered: { zIndex: 1 },
  exiting: { zIndex: 2 },
  exited: { zIndex: 1 }
}

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      route: null
    }
  }

  componentDidMount() {
    root.scrollTo(0, 0)
  }

  render() {
    const { name, children, transitionState } = this.props

    return [
      <div
        className="Revealer reveal-right"
        key="bla1"
        style={{
          ...defaultStylesRight,
          ...revealStylesRight[transitionState]
        }}
      />,
      <div
        className="Page"
        key="bla2"
        style={{
          ...pageStyles[transitionState]
        }}
      >
        <Header active={name} />
        {children}
      </div>
    ]
  }
}

Page.propTypes = {
  name: PropTypes.string,
  children: PropTypes.array
}

export default Page
