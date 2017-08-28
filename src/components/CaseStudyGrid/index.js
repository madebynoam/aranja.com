import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'
import classnames from 'classnames'
import { EditInline } from 'tux'
import { H3, Body1 } from '../../typography'
import Button from '../Button'
import './styles.css'

class CaseStudyGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
    }
  }

  onChange(isVisible) {
    this.setState({
      isVisible,
    })
  }

  render() {
    const { isVisible } = this.state
    const { casestudies } = this.props
    return (
      <VisibilitySensor
        onChange={isVisible => this.onChange(isVisible)}
        active={!isVisible}
        intervalDelay={250}
        minTopValue={400}
        partialVisibility
      >
        <div className={classnames('CaseStudyGrid', 'is-visible')}>
          <H3 component="div" className="CaseStudyGrid-heading" bottom="xsmall">
            <EditInline format="plain" field="fields.content.portfolioHeading">Latest case studies</EditInline>
          </H3>
          <Body1 component="div" className="CaseStudyGrid-subheading" bottom="medium">
            <EditInline format="plain" field="fields.content.portfolioText">
              Have a look at our recently published work
            </EditInline>
          </Body1>
          <div className="CaseStudyGrid-items">
            {casestudies && casestudies.items.map((item, index) =>
              <a
                href={`/work/${item.fields.slug}`}
                key={index}
                className='CaseStudyGrid-itemWrap'
              >
                {item.fields.projectName &&
                  <p className="CaseStudyGrid-caption">
                    {item.fields.projectName}
                  </p>}
                <div className="CaseStudyGrid-item">
                  <div
                    className="CaseStudyGrid-image"
                    style={{
                      backgroundImage: `url(${item.fields.heroImage.fields.file.url})`,
                    }}
                  />
                </div>
              </a>,
            )}
          </div>
          <div className="CaseStudyGrid-button">
            <Button to="/work">View all studies</Button>
          </div>
        </div>
      </VisibilitySensor>
    )
  }
}

CaseStudyGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
}

export default CaseStudyGrid
