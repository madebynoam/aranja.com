import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Parallax from '../Parallax'
import family02 from './family02.jpg'
import family03 from './family03.jpg'
import family04 from './family04.jpg'
import family06 from './family06.jpg'
import family07 from './family071.jpg'
import family10 from './family10.jpg'
import { withReveal } from '../../hoc/withReveal'
import './styles.css'

const FamilyGrid = ({ isVisible }) => (
  <Parallax>
    <div
      className={classNames('Family', isVisible && 'is-visible')}
    >
      <div className="Family-grid">
        <div className="Family-item" data-animate>
          <div
            className="Family-image"
            style={{ backgroundImage: `url(${family07})` }}
          />
        </div>
        <div className="Family-item" data-animate>
          <div
            className="Family-image"
            style={{ backgroundImage: `url(${family06})` }}
          />
        </div>
        <div className="Family-item" data-animate>
          <div
            className="Family-image"
            style={{ backgroundImage: `url(${family03})` }}
          />
        </div>
        <div className="Family-item" data-animate>
          <div
            className="Family-image"
            style={{ backgroundImage: `url(${family02})` }}
          />
        </div>
        <div className="Family-item" data-animate>
          <div
            className="Family-image"
            style={{ backgroundImage: `url(${family10})` }}
          />
        </div>
        <div className="Family-item" data-animate>
          <div
            className="Family-image"
            style={{ backgroundImage: `url(${family04})` }}
          />
        </div>
      </div>
    </div>
  </Parallax>
)

FamilyGrid.propTypes = {
  isVisible: PropTypes.bool
}

export default withReveal(FamilyGrid, { minTopValue: 30 })
