import React, { PureComponent } from 'react'
import Observer from 'react-intersection-observer'

export const withReveal = (
  WrappedComponent,
  className,
) => {
  return class extends PureComponent {
    render() {
      return (
        <Observer triggerOnce className={className}>
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
