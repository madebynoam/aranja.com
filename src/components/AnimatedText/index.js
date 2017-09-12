import React, { PureComponent } from 'react'
import classNames from 'classnames'
import Observer from 'react-intersection-observer'
import PropTypes from 'prop-types'
import { H1 } from '../../typography'
import './styles.scss'

const UnControlled = ({ shouldAnimate, children, animation, breakOnMobile }) => (
  <span>
    {children.split('\n').map(text => (
      <span className={classNames('AnimatedText', breakOnMobile && 'should-breakOnMobile')} key={text}>
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
  </span>
)

class AnimatedText extends PureComponent {

  render() {
    const { children, animation = 'appearUp', uncontrolled, shouldAnimate, breakOnMobile } = this.props

    // Other props can send in shouldAnimate and then we skip listening to our own state
    if (uncontrolled) {
      return <UnControlled children={children} animation={animation} shouldAnimate={shouldAnimate && shouldAnimate !== 'undefined'} />
    }

    return (
      <Observer triggerOnce tag="span">
        {isVisible => 
          <span>
          {children.split('\n').map(text => (
            <span className={classNames('AnimatedText', breakOnMobile && 'should-breakOnMobile')} key={text}>
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
        </span>
        }
      </Observer>
    )
  }
}

AnimatedText.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  animation: PropTypes.oneOf(['appearUp', 'appearUpSlow'])
}

export default AnimatedText
