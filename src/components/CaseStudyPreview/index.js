import React, { Component } from 'react'
import classNames from 'classnames'
import { H1, Body1 } from '../../typography'
import Section from '../Section'
import Link from '../Link'
import './styles.css'

class CaseStudyPreview extends Component {
  render() {
    const {
      title,
      duration,
      description,
      slug,
      img,
      alignment,
      url
    } = this.props
    return (
      <Section top="medium" bottom="medium">
        <Link
          noStyle
          href={url}
          className={classNames(
            'CaseStudyPreview',
            alignment === 'right' && 'is-alignedRight'
          )}
        >
          <div className="CaseStudyPreview-content">
            <p className="CaseStudyPreview-date">
              {duration}
            </p>
            <div className="CaseStudyPreview-title">
              <H1>
                {title}
              </H1>
            </div>
            <div className="CaseStudyPreview-description">
              <Body1>
                {description}
              </Body1>
            </div>
          </div>
          <div
            className="CaseStudyPreview-background"
            style={{ backgroundImage: `url(${img})` }}
          />
        </Link>
      </Section>
    )
  }
}

export default CaseStudyPreview
