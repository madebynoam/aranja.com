import React, { Component } from 'react'
import { H1 } from '../../../typography'
import './styles.css'

class HeroOverlay extends Component {
  render() {
    return (
      <div className="HeroOverlay">
        <span className="t-revealWrap">
          <H1 className="HeroOverlay-text t-reveal" data-reveal-content>
            Welcome
          </H1>
        </span>
      </div>
    )
  }
}

export default HeroOverlay
