import React from 'react'
import { H1 } from '../../../typography'
import './styles.css'

const HeroOverlay = ({ intro }) =>
  <div className="HeroOverlay">
    <span className="t-revealWrap">
      <H1 className="HeroOverlay-text t-reveal">
        {intro}
      </H1>
    </span>
  </div>

export default HeroOverlay
