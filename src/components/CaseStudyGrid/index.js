import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { EditInline } from 'tux'
import { H1, Body1 } from '../../typography'
import Button from '../Button'
import Section from '../Section'
import { withReveal } from '../../hoc/withReveal'
import './styles.css'

const CaseStudyGrid = ({ caseStudies, button, isVisible, hasBeenSeen }) =>
  <Section noPadding>
    <div className={classnames('CaseStudyGrid', isVisible && 'is-visible')}>
      <div className="CaseStudyGrid-items">
        {caseStudies &&
          caseStudies.items.slice(0, 3).map((item, index) =>
            <a
              href={`/work/${item.fields.slug}`}
              key={index}
              className="CaseStudyGrid-itemWrap"
            >
              {item.fields.projectName &&
                <p className="CaseStudyGrid-caption">
                  {item.fields.projectName}
                </p>}
              <div className="CaseStudyGrid-item">
                <i className="CaseStudyGrid-animatedOverlay before" />
                <div
                  className="CaseStudyGrid-image"
                  style={{
                    backgroundImage: `url(${item.fields.heroImage.fields.file
                      .url})`
                  }}
                />
              </div>
            </a>
          )}
      </div>
      {button &&
        <div className="CaseStudyGrid-button">
          <Button to="/work">{button}</Button>
        </div>
      }
    </div>
    
  </Section>

CaseStudyGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      href: PropTypes.string
    })
  )
}

export default withReveal(CaseStudyGrid)
