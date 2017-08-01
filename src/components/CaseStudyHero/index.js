import React from 'react'
import Parallax from '../Parallax'
import { Chapter, H1 } from '../../typography'
import Button from '../Button'
import './styles.css'

const CaseStudyHero = ({ img, chapter = 'Case study #1', company }) =>
  <Parallax>
    <div className="CaseStudyHero">
      <div className="CaseStudyHero-imageWrapper">
        <div className="CaseStudyHero-imageMask">
          <div className="CaseStudyHero-image" style={{ backgroundImage: `url(${img})` }}>
            <div className="CaseStudyHero-contentBackground">
              <div className="CaseStudyHero-content">
                <Chapter inversed>
                  {chapter}
                </Chapter>
                <H1 className="CaseStudy-heading">
                  {company}
                </H1>
                <div className="CaseStudy-buttons">
                  <Button inverse>Visit site</Button>
                  <Button inverse>Read study</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Parallax>

export default CaseStudyHero
