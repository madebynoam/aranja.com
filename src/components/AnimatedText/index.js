import React, { PureComponent } from 'react'
import classNames from 'classnames'
import VisibilitySensor from 'react-visibility-sensor'
import PropTypes from 'prop-types'
import { H1 } from '../../typography'
import './styles.css'

const UnControlled = ({ shouldAnimate, children, animation }) => (
  <div>
    {children.split('\n').map(text => (
      <span className={classNames('AnimatedText')} key={text}>
        <span
          className={classNames(
            'AnimatedText-part',
            shouldAnimate && 'is-visible',
            `AnimatedText--${animation}`
          )}
        >
          {text}
        </span>
      </span>
    ))}
  </div>
)

class AnimatedText extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }

  onChange(isVisible) {
    this.setState({
      isVisible: isVisible
    })
  }

  render() {
    const { isVisible } = this.state
    const { children, animation = 'AppearUp', uncontrolled, shouldAnimate } = this.props

    // Other props can send in shouldAnimate and then we skip listening to our own state
    if (uncontrolled) {
      return <UnControlled children={children} animation={animation} shouldAnimate={shouldAnimate && shouldAnimate !== 'undefined'} />
    }

    return (
      <VisibilitySensor
        onChange={isVisible => this.onChange(isVisible)}
        active={!isVisible}
        minTopValue={0}
        partialVisibility
      >
        <div>
          {children.split('\n').map(text => (
            <span className={classNames('AnimatedText')} key={text}>
              <span
                className={classNames(
                  'AnimatedText-part',
                  isVisible && 'is-visible',
                  `AnimatedText--${animation}`
                )}
              >
                {text}
              </span>
            </span>
          ))}
        </div>
      </VisibilitySensor>
    )
  }
}

AnimatedText.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  animation: PropTypes.oneOf(['AppearUp', 'FadeIn'])
}

export default AnimatedText
