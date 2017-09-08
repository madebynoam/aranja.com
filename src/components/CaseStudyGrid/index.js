import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Button from '../Button'
import Link from '../Link'
import { H3 } from '../../typography'
import { withReveal } from '../../hoc/withReveal'
import './styles.css'

const CaseStudyGrid = ({ caseStudies, button, padding, isVisible }) => (
  <div
    className={classNames(
      'CaseStudyGrid',
      isVisible && 'is-visible',
      padding && 'withPadding'
    )}
  >
    <div className="CaseStudyGrid-items">
      {caseStudies.items.slice(0, 6).map(item => (
        <Link
          noStyle
          className="CaseStudyGrid-item"
          href={`/work/${item.fields.slug}`}
          key={item.fields.slug}
        >
          <H3 className="CaseStudyGrid-itemTitle">{item.fields.projectName}</H3>
          <div
            className="CaseStudyGrid-image"
            style={{
              backgroundImage: `url(${item &&
                item.fields.heroImage.fields.file.url})`
            }}
          />
        </Link>
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

export default withReveal(CaseStudyGrid)
