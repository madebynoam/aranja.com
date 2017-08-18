import React, { Component } from 'react'
import classNames from 'classnames'
import { H1, Body2 } from '../../typography'
import Section from '../Section'
import './styles.css'

class CaseStudyPreview extends Component {
  render() {
    const { title, description, year, img, alignment, url } = this.props
    return (
      <Section top="small" bottom="small">
        <a href={url} className={classNames('CaseStudyPreview', alignment === 'right' && 'is-aligned-right')}>
          <div className="CaseStudyPreview-content">
            <div className="CaseStudyPreview-title">
            <H1>
              {title}
            </H1>
            </div>
            <div className="CaseStudyPreview-description">
              <Body2>{description}</Body2>
            </div>
            <div className="CaseStudyPreview-link">
              <a href="/kolibri">View case study</a>
            </div>
          </div>
          <div className="CaseStudyPreview-background" style={{ backgroundImage: `url(${img})` }}></div>
        </a>
      </Section>
    )
  }
}

export default CaseStudyPreview