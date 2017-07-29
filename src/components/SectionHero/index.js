import React from 'react'
import Parallax from '../Parallax'
import './styles.css'

const SectionHero = ({ img, caption }) =>
  <Parallax>
    <div className="SectionHero">
      <div className="SectionHero-imageWrapper">
        <div className="SectionHero-imageMask">
          <div className="SectionHero-image" style={{ backgroundImage: `url(${img})` }} />
        </div>
      </div>
    </div>
  </Parallax>

export default SectionHero
