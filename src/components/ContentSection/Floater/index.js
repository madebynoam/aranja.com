import React from 'react'
import PropTypes from 'prop-types'
import Parallax from '../../Parallax'
import './styles.scss'

const Floater = ({ topDevice, centerDevice, bottomDevice }) =>
  <Parallax>
    <div className="Floater">
      <img className="Floater-single" src={bottomDevice} />
      <img className="Floater-single" src={centerDevice} />
      <img className="Floater-single" src={topDevice} />
    </div>
  </Parallax>

Floater.propTypes = {
  topDevice: PropTypes.string.isRequired,
  centerDevice: PropTypes.string.isRequired,
  bottomDevice: PropTypes.string.isRequired
}

export default Floater
