import React, { Component } from 'react'
import classNames from 'classnames'
import { H1 } from '../../typography'
import './styles.css'

class AnimatedText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }

  componentDidMount() {
    this.setState({
      isVisible: true
    })
  }

  render() {
    const { isVisible } = this.state
    const { component, className, text } = this.props
    const RenderedComponent = component ? component : H1
    return text
      ? <RenderedComponent className={className}>
          {text.map(text => (
            <span className={classNames('AnimatedText')}>
              <span
                className={classNames(
                  'AnimatedText-part',
                  isVisible && 'is-visible'
                )}
              >
                {text}
              </span>{' '}
            </span>
          ))}
        </RenderedComponent>
      : null
  }
}

export default AnimatedText
