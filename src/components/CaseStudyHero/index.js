import React from 'react'
import Parallax from '../Parallax'
import { Legend, H1 } from '../../typography'
import Button from '../Button'
import './styles.css'

// Todo: I might have nested this a tad too much. Parallax is hard.

const CaseStudyHero = ({ img, chapter = 'Case study #1', company }) =>
  <Parallax>
    <section className="Section CaseStudyHero">
      <div className="CaseStudyHero-imageWrapper">
        <div className="CaseStudyHero-image" style={{ backgroundImage: `url(${img})` }}>
          <div className="CaseStudyHero-content">
            <Legend inversed>
              {chapter}
            </Legend>
            <H1 className="CaseStudy-heading">
              {company}
            </H1>
            <div className="CaseStudy-buttons">
              <Button className="CaseStudy-button">Visit site</Button>
              <Button className="CaseStudy-button is-main">Read study</Button>
            </div>
          </div>
          <div className="CaseStudyHero-contentBackground" />
        </div>
      </div>
    </section>
  </Parallax>

export default CaseStudyHero
