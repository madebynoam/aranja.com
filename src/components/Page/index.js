import React, { Component } from 'react'
import PropTypes from 'prop-types'
import root from 'window-or-global'
import classNames from 'classnames'
import Header from '../Header'
import Footer from '../Footer'
import './styles.css'


const revealActiveStyles = {
  // entering: {},
  // entered: {},
  exiting: { transition: 'transform 0s' },
  exited: { transition: 'transform 0s' }
}

const pageStyles = {
  entering: { display: 'none', zIndex: 2 },
  entered: { display: 'block', zIndex: 1 },
  exiting: { display: 'block', zIndex: 1 },
  exited: { display: 'none', zIndex: -1 },
}

class Page extends Component {
  componentDidUpdate(prevProps) {
    if (
      prevProps.transitionState === 'entering' &&
      this.props.transitionState === 'entered'
    ) {
      root.scrollTo(0, 0)
    }
  }

  render() {
    const { name, children, transitionState } = this.props

    return [
      <div
        className={classNames(
          'Revealer',
          transitionState  && 'is-active',
        )}
        style={revealActiveStyles[transitionState]}
        key="revealer"
      >
        <div className="Revealer-layer" />
        <div className="Revealer-layer" />
      </div>,
      <div className="Page" key="page" style={pageStyles[transitionState]}>
        <Header active={name} />
        {children}
      </div>
    ]
  }
}

export default Page
