import React, { Component } from 'react'
import { TweenMax, Expo } from 'gsap'
import VisibilitySensor from 'react-visibility-sensor'
import { Body1, Body2, H2, H3 } from '../../../typography'
import './styles.css'

const ease = Expo.easeOut

class ContentThreeColumnCopy extends Component {
  constructor() {
    super()
    this.state = {
      isVisible: false
    }
    this.nodes = []
    this.animationDuration = 1.5
  }

  componentDidMount() {
    this.nodes = this.component.querySelectorAll('[data-animate]')
    TweenMax.set(this.nodes, { y: -50, opacity: 0 })
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.isVisible && this.state.isVisible) {
      this.handleAnimation()
    }
  }

  handleAnimation() {
    TweenMax.staggerTo(this.nodes, this.animationDuration, { y: 0, opacity: 1, ease }, 0.2)
  }

  onChange(isVisible) {
    if (isVisible) {
      this.setState({ isVisible: true })
    }
  }

  render() {
    const {
      heading,
      column1Subheading,
      column1Copy,
      column2Subheading,
      column2Copy,
      column3Subheading,
      column3Copy
    } = this.props
    const { isVisible } = this.state

    return (
      <VisibilitySensor
        onChange={isVisible => this.onChange(isVisible)}
        active={!isVisible}
        intervalDelay={100}
        minTopValue={300}
        partialVisibility
      >
        <div className="ContentSection-threeCols" ref={ref => { this.component = ref }}>
          <div className="ContentSection-column" data-animate>
            <H3 top="small" bottom="small">
              {column1Subheading}
            </H3>
            <Body2>
              {column1Copy}
            </Body2>
          </div>
          <div className="ContentSection-column" data-animate>
            <H3 top="small" bottom="small">
              {column2Subheading}
            </H3>
            <Body2>
              {column2Copy}
            </Body2>
          </div>
          <div className="ContentSection-column" data-animate>
            <H3 top="small" bottom="small">
              {column3Subheading}
            </H3>
            <Body2>
              {column3Copy}
            </Body2>
          </div>
        </div>
      </VisibilitySensor>
    )
  }
}

export default ContentThreeColumnCopy
