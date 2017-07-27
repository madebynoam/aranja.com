import React from 'react'
import './styles.css'
import { TweenMax, Expo } from 'gsap'
import VisibilitySensor from 'react-visibility-sensor'
import Parallax from '../Parallax'
import { Body1, Body2, H2 } from '../../typography'

const ease = Expo.easeOut

class Service extends React.Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
      shouldStart: false,
    }
    this.textNodes = []
    this.imageNodes = []
    this.animationDuration = 1
  }

  componentDidMount() {
    this.textNodes = this.componentRef.querySelectorAll('[data-animate=\'text\']')
    this.imageNodes = this.componentRef.querySelectorAll('[data-animate=\'image\']')
    TweenMax.set(this.textNodes, { x: -200, opacity: 0 })
    TweenMax.set(this.imageNodes, { xPercent: -100 })
  }

  handleAnimatingText() {
    TweenMax.staggerTo(this.textNodes, this.animationDuration, { x: 0, opacity: 1, ease }, 0.1)
  }

  handleAnimatingImages() {
    TweenMax.to(this.imageNodes, 1, {
      xPercent: 0,
      opacity: 1,
      delay: this.animationDuration / 2,
      ease,
    })
  }

  onChange(isVisible) {
    if (isVisible) {
      this.setState(
        {
          isVisible: true,
        },
        () => {
          this.handleAnimatingText()
          this.handleAnimatingImages()
        },
      )
    }
  }

  componentWillUnmount() {}

  render() {
    const { heading, copy, image } = this.props
    const { isVisible } = this.state
    return (
      <VisibilitySensor
        onChange={isVisible => this.onChange(isVisible)}
        active={!isVisible}
        intervalDelay={100}
        minTopValue={300}
        partialVisibility
      >
        <div
          className="Service"
          ref={componentRef => {
            this.componentRef = componentRef
          }}
        >
          <div className="Service-contentWrap">
            <div className="Service-content">
              <H2 className="Service-heading" bottom="small">
                {heading.split(' ').map((word, i) => {
                  return (
                    <span className="u-mask" key={i}>
                      <span className="u-maskInner" data-animate="text">
                        {word}
                      </span>
                    </span>
                  )
                })}
              </H2>
              <Body1 bottom="small" className="Service-copy">
                <span className="u-mask">
                  <span className="u-maskInner" data-animate="text">
                    {copy}
                  </span>
                </span>
              </Body1>
              <a href="#temp" className="Service-link">
                <span className="u-mask u-flex u-flexAlignCenter">
                  <span className="u-lineDecorator" data-animate="text" />
                  <span className="u-maskInner u-textIndent1" data-animate="text">
                    See details
                  </span>
                </span>
              </a>
            </div>
          </div>
          <Parallax>
            <div className="Service-imageWrapper">
              <div className="Service-imageMask">
                <div
                  className="Service-image"
                  data-animate="image"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                />
              </div>
            </div>
          </Parallax>
        </div>
      </VisibilitySensor>
    )
  }
}

export default Service
