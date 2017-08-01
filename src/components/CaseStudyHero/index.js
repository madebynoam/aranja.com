import React from 'react'
import Parallax from '../Parallax'
import { Chapter, H1 } from '../../typography'
import Button from '../Button'
import './styles.css'

// Todo: I might have nested this a tad too much. Parallax is hard.

const CaseStudyHero = ({ img, chapter = 'Case study #1', company }) =>
  <Parallax>
    <div className="CaseStudyHero">
      <div className="CaseStudyHero-imageWrapper">
        <div className="CaseStudyHero-image" style={{ backgroundImage: `url(${img})` }}>
          <div className="CaseStudyHero-content">
            <Chapter inversed>
              {chapter}
            </Chapter>
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
    </div>
  </Parallax>

export default CaseStudyHero
