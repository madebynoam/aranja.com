import React from 'react'
import PropTypes from 'prop-types'
import { H1, Body1 } from '../../../typography'
import './styles.css'

const Intro = ({ project, description }) =>
  <div className="Intro">
    <div className="Intro-split">
      <H1>{project}</H1>
    </div>
    <div className="Intro-split">
      <Body1 className="Intro-description">
        {description}
      </Body1>
    </div>
  </div>

Intro.propTypes = {
  project: PropTypes.string,
  description: PropTypes.string,
}
export default Intro
