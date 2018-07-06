import { Component } from 'react'
import { findDOMNode } from 'react-dom'
import BaseObserver from './lib/Observer'

class Observer extends Component {
  static defaultProps = {
    defaultValue: false,
  }
  state = {
    value: this.props.defaultValue,
  }

  componentDidMount() {
    this.observer = new BaseObserver(this.props.value, {
      debug: this.props.debug,
      onChange: this.onChange,
      context: {
        rootElement: findDOMNode(this),
      },
    })
  }

  componentWillReceiveProps(newProps) {
    this.observer.update(newProps.value)
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.dispose()
    }
  }

  onChange = value => {
    this.setState({ value })
    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }

  render() {
    const { children } = this.props
    if (typeof children === 'function') {
      return children(this.state.value)
    }
    return children
  }
}

export default Observer
