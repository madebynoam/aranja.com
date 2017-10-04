import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Button from '../Button'
import Link from '../Link'
import { H2 } from '../../typography'
import { withReveal } from '../../hoc/withReveal'
import './styles.scss'

const CaseStudyGrid = ({ caseStudies, button, padding, isVisible }) => (
  <div
    className={classNames(
      "CaseStudyGrid",
      isVisible && "is-visible",
      padding && "withPadding"
    )}
  >
    <div className="CaseStudyGrid-items">
      {caseStudies.items.slice(0, 6).map(item => (
        <Link
          noStyle
          className={
            classNames('CaseStudyGrid-item', item.fields.featured === true && 'is-featured')}
          href={`/work/${item.fields.slug}`}
          key={item.fields.slug}
        >
          <H2 className="CaseStudyGrid-itemTitle">{item.fields.projectName}</H2>
          <div className="CaseStudyGrid-imageWrap">
            <div
              className="CaseStudyGrid-image"
              style={{
                backgroundImage: `url(${item &&
                  item.fields.heroImage.fields.file.url})`
              }}
            />
          </div>
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
