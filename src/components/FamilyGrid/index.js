import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'
import { TweenMax, Expo } from 'gsap'
import { H2, Body1 } from '../../typography'
import { EditInline } from 'tux'
import Section from '../Section'
import './styles.css'
import family01 from './family01.jpg'
import family02 from './family02.jpg'
import family03 from './family03.jpg'
import family04 from './family04.jpg'
import family05 from './family05.jpg'
import family06 from './family06.jpg'
import family07 from './family071.jpg'
import family08 from './family08.jpg'
import family09 from './family09.jpg'

const ease = Expo.easeOut

class FamilyGrid extends Component {
  constructor() {
    super()
    this.state = {
      isVisible: false
    }
    // this.animationNodes = []
    // this.animationDuration = 1
  }

  // componentDidMount() {
  //   this.animationNodes = this.componentRef.querySelectorAll('[data-animate]')
  //   TweenMax.set(this.animationNodes, { y: -100, autoAlpha: 0 })
  // }

  // onChange(isVisible) {
  //   if (isVisible) {
  //     this.setState({
  //       isVisible
  //     })
  //     this.handleAnimation()
  //   }
  // }

  // handleAnimation() {
  //   TweenMax.staggerTo(
  //     this.animationNodes,
  //     this.animationDuration,
  //     {
  //       y: 0,
  //       autoAlpha: 1,
  //       ease
  //     },
  //     0.1
  //   )
  // }

  render() {
    const { isVisible } = this.state
    return (
      <VisibilitySensor
        active={false}
        intervalDelay={100}
        minTopValue={100}
        partialVisibility
      >
        <div
          className="Family"
          ref={componentRef => {
            this.componentRef = componentRef
          }}
        >
          <div className="Family-grid">
            <div className="Family-item" data-animate>
              <div className="Family-image" style={{ backgroundImage: `url(${family01})` }} />
              <div className="Family-image" style={{ backgroundImage: `url(${family03})` }}/>
            </div>
            <div className="Family-item" data-animate>
              <div className="Family-image" style={{ backgroundImage: `url(${family05})` }}/>
              <div className="Family-image" style={{ backgroundImage: `url(${family07})` }}/>
            </div>
            <div className="Family-item" data-animate>
              <div className="Family-image" style={{ backgroundImage: `url(${family04})` }}/>
              <div className="Family-image" style={{ backgroundImage: `url(${family06})` }}/>
            </div>
          </div>
        </div>
      </VisibilitySensor>
    )
  }
}

FamilyGrid.propTypes = {
}

export default FamilyGrid
