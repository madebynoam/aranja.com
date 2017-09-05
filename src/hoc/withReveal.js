import React, { PureComponent } from 'react'
import Observer from 'react-intersection-observer'

export const withReveal = (
  WrappedComponent,
  config,
) => {
  return class extends PureComponent {
    render() {
      return (
        <Observer triggerOnce>
        {inView => 
          <WrappedComponent
            isVisible={inView}
            {...this.props}
          />
        }
        </Observer>
      )
    }
  }
}
