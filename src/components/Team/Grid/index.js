import React, { Component } from 'react'
import { TweenMax, Expo } from 'gsap'
import VisibilitySensor from 'react-visibility-sensor'
import teamPhoto00 from './00.jpg'
import teamPhoto01 from './01.jpg'
import teamPhoto02 from './02.jpg'
import './styles.css'

const ease = Expo.easeOut

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
    this.textNodes = this.componentRef.querySelectorAll("[data-animate='text']")
    this.imageNodes = this.componentRef.querySelectorAll(
      "[data-animate='image']"
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
      this.animationDuration / 3
    )
  }

  render() {
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
          className="Team-grid"
          ref={componentRef => {
            this.componentRef = componentRef
          }}
        >
          <div className="Team-gridImageMask" data-image="large">
            <div
              className="Team-gridImage"
              style={{ backgroundImage: `url(${teamPhoto00})` }}
              data-animate="image"
            />
          </div>
          <div className="Team-gridImageMask" data-image="small">
            <div
              className="Team-gridImage"
              style={{ backgroundImage: `url(${teamPhoto01})` }}
              data-animate="image"
            />
          </div>
          <div className="Team-gridImageMask" data-image="small">
            <div
              className="Team-gridImage"
              style={{ backgroundImage: `url(${teamPhoto02})` }}
              data-animate="image"
            />
          </div>
        </div>
      </VisibilitySensor>
    )
  }
}

export default TeamGrid
