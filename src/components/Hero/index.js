import React, { Component } from 'react'
import { H1, Legend } from '../../typography'
import './styles.css'
import ScrollIndicator from '../ScrollIndicator'
import HeroOverlay from './HeroOverlay'

class Hero extends Component {
  render() {
    const { img, title, intro } = this.props
    return (
      <div className="Hero-wrap">
        <HeroOverlay intro={intro} />
        <div className="Hero">
          <div key={title} className="Hero-item" style={{ backgroundImage: `url(${img})` }}>
            <div className="Hero-text">
              <H1 className="Hero-textHeading">
                {title}
              </H1>
            </div>
          </div>
          <ScrollIndicator />
        </div>
      </div>
    )
  }
}

export default Hero
