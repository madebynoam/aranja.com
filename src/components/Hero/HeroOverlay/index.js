import React, { Component } from 'react'
import { H1 } from '../../../typography'
import './styles.css'

class HeroOverlay extends Component {
  render() {
    return (
      <div className="HeroOverlay">
        <span className="HeroOverlay-textRevealer">
          <H1 className="HeroOverlay-text">Welcome</H1>
        </span>
      </div>
    )
  }
}

export default HeroOverlay
