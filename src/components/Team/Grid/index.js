import React, { Component } from 'react'
import { TweenMax, Power4 } from 'gsap'
import Observer from 'react-intersection-observer'
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
    const { images } = this.props
    console.log(images)
    return (
      <Observer triggerOnce onChange={(isVisible) => this.onChange(isVisible)}>
        {isVisible =>
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
        }
      </Observer>
    )
  }
}

export default TeamGrid
