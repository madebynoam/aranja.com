import React, { PureComponent } from 'react'
import Observer from 'react-intersection-observer'

const DEFAULT_THRESHOLD = 0.2
const DEFAULT_TRIGGER_ONCE = true

export const withReveal = (WrappedComponent, config) => {
  return class extends PureComponent {
    constructor(props) {
      super(props)
      this.config = {
        threshold: DEFAULT_THRESHOLD,
        triggerOnce: DEFAULT_TRIGGER_ONCE,
        className: '',
        tag: 'div',
        ...config
      }
    }
    render() {
      const { triggerOnce, threshold, className, tag } = this.config
      return (
        <Observer
          triggerOnce={triggerOnce}
          threshold={threshold}
          className={className}
          tag={tag}
        >
          {inView => <WrappedComponent isVisible={inView} {...this.props} />}
        </Observer>
      )
    }
  }
}
