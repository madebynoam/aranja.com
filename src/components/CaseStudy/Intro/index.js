import React from 'react'
import PropTypes from 'prop-types'
import { H2, H4 } from '../../../typography'
import Section from '../../Section'
import './styles.css'

const Intro = ({ project, description }) =>
  <Section top="medium" bottom="medium">
    <div className="Intro">
      <div className="Intro-split">
        <H2>{project}</H2>
      </div>
      <div className="Intro-split">
        <H4 className="Intro-description">
          {description}
        </H4>
      </div>
    </div>
  </Section>

Intro.propTypes = {
  project: PropTypes.string,
  description: PropTypes.string,
}
export default Intro
