// Usage: withReveal(MyComponent, { intervalDelay: 150, minTopValue: 400 })

import React, { Component } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import PropTypes from 'prop-types'

const DEFAULT_INTERVAL_DELAY = 150
const DEFAULT_MIN_TOP_VALUE = 300

export const withReveal = (
  WrappedComponent,
  config,
) => {
  return class extends Component {    
    constructor(props) {
      super(props)
      this.state = {
        isVisible: false,
        hasBeenSeen: false
      }
      this.config = {
        intervalDelay: DEFAULT_INTERVAL_DELAY,
        minTopValue: DEFAULT_MIN_TOP_VALUE,
        partialVisibility: true,
        ...config,
      }
    }

    onChange(isVisible) {
      console.log(isVisible)
      this.setState({
        isVisible
      })
    }

    componentDidUpdate(prevProps, prevState) {
      if (
        !prevState.isVisible &&
        this.state.isVisible &&
        !this.state.hasBeenSeen
      ) {
        this.setState({
          hasBeenSeen: true
        })
      }
    }

    render() {
      const { intervalDelay, minTopValue, partialVisibility } = this.config
      const { isVisible, hasBeenSeen } = this.state

      return (
        <VisibilitySensor
          active
          onChange={isVisible => this.onChange(isVisible)}
          intervalDelay={intervalDelay}
          minTopValue={minTopValue}
          partialVisibility={partialVisibility}
        >
          <WrappedComponent
            isVisible={isVisible}
            hasBeenSeen={hasBeenSeen}
            {...this.props}
          />
        </VisibilitySensor>
      )
    }
  }
}

withReveal.propTypes = {
  intervalDelay: PropTypes.number,
  minTopValue: PropTypes.number,
  onChange: PropTypes.func
}
