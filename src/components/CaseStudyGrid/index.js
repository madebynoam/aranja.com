import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Observer from 'react-intersection-observer'
import Button from '../Button'
import { H3 } from '../../typography'
import './styles.css'

const CaseStudyGrid = ({ caseStudies, button, padding }) => (
  <div className={classNames('CaseStudyGrid', padding && 'withPadding')}>
    <div className="CaseStudyGrid-items">
      {caseStudies &&
        caseStudies.items.slice(0, 6).map((item, index) => (
          <Observer
            triggerOnce
            threshold="0.2"
            tag="a"
            className="CaseStudyGrid-item"
            href={`/work/${item.fields.slug}`}
          >
            {isVisible => (
              <div
                className={classNames(
                  'CaseStudyGrid-itemInner',
                  isVisible && 'is-visible'
                )}
                key={index}
              >
                <div
                  className="CaseStudyGrid-image"
                  style={{
                    backgroundImage: `url(${item &&
                      item.fields.heroImage.fields.file.url})`
                  }}
                />
                <div className="CaseStudyGrid-info">
                  <H3>{item.fields.projectName}</H3>
                </div>
              </div>
            )}
          </Observer>
        ))}
    </div>
    {button && (
      <div className="CaseStudyGrid-button">
        <Button to="/work">{button}</Button>
      </div>
    )}
  </div>
)

CaseStudyGrid.propTypes = {
  caseStudies: PropTypes.any,
  padding: PropTypes.bool,
  button: PropTypes.string
}

export default CaseStudyGrid
