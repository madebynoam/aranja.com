import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Parallax from '../Parallax'
import family1 from './family1.jpg'
import family2 from './family2.jpg'
import family3 from './family3.jpg'
import family4 from './family4.jpg'
import { withReveal } from '../../hoc/withReveal'
import './styles.css'

const FamilyGrid = ({ isVisible }) => (
  <Parallax>
    <div
      className={classNames('Family', isVisible && 'is-visible')}
    >
      <div className="Family-grid">
        <div className="Family-item">
          <div
            className="Family-image"
            style={{ backgroundImage: `url(${family2})` }}
          />
        </div>
        <div className="Family-item">
          <div
            className="Family-image"
            style={{ backgroundImage: `url(${family1})` }}
          />
        </div>
        <div className="Family-item">
          <div
            className="Family-image"
            style={{ backgroundImage: `url(${family4})` }}
          />
        </div>
        <div className="Family-item">
          <div
            className="Family-image"
            style={{ backgroundImage: `url(${family3})` }}
          />
        </div>
      </div>
    </div>
  </Parallax>
)

FamilyGrid.propTypes = {
  isVisible: PropTypes.bool
}

export default withReveal(FamilyGrid)
