import React, { Component } from 'react'
import PropTypes from 'prop-types'
import root from 'window-or-global'
import Transition from 'react-transition-group/Transition'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import Header from '../Header'
import Footer from '../Footer'
import './styles.css'

const duration = 300

const defaultStyle = {
  transition: `background-color ${duration}ms ease-in-out`,
  backgroundColor: 'rebeccapurple'
}

const transitionStyles = {
  entering: { backgroundColor: 'blue' },
  entered: { backgroundColor: 'red' },
  exiting: { backgroundColor: 'pink' },
  exited: { backgroundColor: 'orange' }
}

class Page extends Component {

  componentDidMount() {
    root.scrollTo(0, 0)
  }

  render() {
    const { name, children, in: inProp } = this.props
    const isHome = name === 'Home'

    return (
      <Transition>
        {state => (
          <div
            className="Page"
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            <Header active={name} inversed={isHome} fixed={isHome} />
            <div className="Page-inner">{children}</div>
            <Footer />
          </div>
        )}
      </Transition>
    )
  }
}

Page.propTypes = {
  name: PropTypes.string,
  children: PropTypes.array
}

export default Page
