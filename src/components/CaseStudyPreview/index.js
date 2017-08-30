import React, { Component } from 'react'
import classNames from 'classnames'
import { H1, Body1 } from '../../typography'
import Section from '../Section'
import Link from '../Link'
import { withReveal } from '../../hoc/withReveal'
import './styles.css'

class CaseStudyPreview extends Component {
  render() {
    const {
      title,
      duration,
      description,
      img,
      alignment,
      url,
      isVisible,
    } = this.props
    return (
      <Section top="medium" bottom="medium">
        <Link
          noStyle
          href={url}
          className={classNames(
            'CaseStudyPreview',
            alignment === 'right' && 'is-alignedRight',
            isVisible && 'is-visible'
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
          <div className="CaseStudyPreview-imageWrap">
            <div
              className="CaseStudyPreview-image"
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
        </Link>
      </Section>
    )
  }
}

export default withReveal(CaseStudyPreview)
