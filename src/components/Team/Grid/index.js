import React, { Component } from 'react'
import { TweenMax, Power4 } from 'gsap'
import VisibilitySensor from 'react-visibility-sensor'
import './styles.css'

const ease = Power4.easeOut

class TeamGrid extends Component {
  constructor() {
    super()
    this.state = {
      isVisible: false
    }
    this.imageNodes = []
    this.animationDuration = 1.5
  }

  componentDidMount() {
    this.textNodes = this.componentRef.querySelectorAll('[data-animate="text"]')
    this.imageNodes = this.componentRef.querySelectorAll(
      '[data-animate="image"]'
    )
    TweenMax.set(this.imageNodes, { autoAlpha: 0, y: 80 })
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.isVisible && this.state.isVisible) {
      this.handleAnimatingImages()
    }
  }

  onChange(isVisible) {
    if (isVisible) {
      this.setState({ isVisible: true })
    }
  }

  handleAnimatingImages() {
    TweenMax.staggerTo(
      this.imageNodes,
      this.animationDuration,
      {
        autoAlpha: 1,
        y: 0,
        ease
      },
      this.animationDuration / 8
    )
  }

  render() {
    const { isVisible } = this.state
    const { images } = this.props
    console.log(images)
    return (
      <VisibilitySensor
        onChange={isVisible => this.onChange(isVisible)}
        active={!isVisible}
        intervalDelay={100}
        minTopValue={300}
        partialVisibility
      >
        <div
          className="Team-grid"
          ref={componentRef => {
            this.componentRef = componentRef
          }}
        >
        {images && images.items[0].fields.images.map((image, index) => 
          <div className="Team-gridImageMask">
            <div
              className="Team-gridImage"
              style={{ backgroundImage: `url(${image.fields.file.url})` }}
              data-animate="image"
            />
          </div>
        )}
        </div>
      </VisibilitySensor>
    )
  }
}

export default TeamGrid
