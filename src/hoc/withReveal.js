// Usage: withReveal(MyComponent, { intervalDelay: 150, minTopValue: 400 })

import React, { PureComponent } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import PropTypes from 'prop-types'

const DEFAULT_MIN_TOP_VALUE = 100

export const withReveal = (
  WrappedComponent,
  config,
) => {
  return class extends PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        isVisible: false,
        hasBeenSeen: false
      }
      this.config = {
        minTopValue: DEFAULT_MIN_TOP_VALUE,
        partialVisibility: true,
        ...config,
      }
    }

    onChange(isVisible) {
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
          resizeCheck={!isVisible}
          active={!isVisible}
          onChange={isVisible => this.onChange(isVisible)}
          intervalDelay={intervalDelay}
          minTopValue={minTopValue}
          partialVisibility={partialVisibility}
          scrollDelay={100}
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
