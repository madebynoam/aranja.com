import React from 'react'
import PropTypes from 'prop-types'
import { H1 } from '../../../typography'
import './styles.css'

const HeroOverlay = ({ intro = 'Introduction Text' }) =>
  <div className="HeroOverlay">
    <span className="t-revealWrap">
      <H1 className="HeroOverlay-text t-reveal">
        {intro}
      </H1>
    </span>
  </div>

HeroOverlay.propTypes = {
  intro: PropTypes.string,
}

export default HeroOverlay
