import React, { Component } from 'react'
import PropTypes from 'prop-types'
import root from 'window-or-global'
import classNames from 'classnames'
import Header from '../Header'
import Footer from '../Footer'
import './styles.css'

const defaultStyles = {
  transition: `transform ${1000}ms cubic-bezier(0.7, 0, 0.3, 1)`,
  transform: 'translateX(-100%)'
}

const revealStyles = {
  entering: { transform: 'translateX(100%)'},
  entered: { transform: 'translateX(100%)'},
  exiting: { transform: 'translateX(-100%)', transition: 'transform 0s' },
  exited: { transform: 'translateX(-100%)', transition: 'transform 0s' }
}

const pageStyles = {
  entering: { zIndex: 1, },
}

class Page extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.transitionState === 'entering' && this.props.transitionState === 'entered') {
      root.scrollTo(0, 0)
    }
  }

  render() {
    const { name, children, transitionState } = this.props

    return [
      <div
        className="Revealer reveal-right"
        key="revealer"
        style={{
          ...defaultStyles,
          ...revealStyles[transitionState]
        }}
      />,
      <div
        className="Page"
        key="page"
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

export default Page
