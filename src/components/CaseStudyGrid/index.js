// TODO: CaseStudyGrid should not use react-motion, but GSAP.
// TODO: CaseStudyGrid should have a scroll functionality, via button, to see older studies.

import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import classnames from 'classnames'
import { EditInline } from 'tux'

import './styles.css'

import image1 from './kolibri-placeholder.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import image5 from './image5.png'
import image6 from './image6.jpg'

let defaultItems = [
  { title: undefined, image: undefined, href: '/', year: '2017' },
  { title: 'Kolibri', image: image1, href: '/', year: undefined },
  { title: 'Transitions', image: image3, href: '/', year: undefined },
  { title: 'So cool', image: image4, href: '/', year: undefined },
  { title: undefined, image: undefined, href: '/', year: '2016' },
  { title: 'Agree', image: image6, href: '/', year: undefined },
]

class CaseStudyGrid extends React.Component {
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
    const { items = defaultItems } = this.props
    return (
      <VisibilitySensor
        onChange={isVisible => this.onChange(isVisible)}
        active={!isVisible}
        intervalDelay={250}
        minTopValue={400}
        partialVisibility
      >
        <div className={classnames('CaseStudyGrid', 'is-visible')}>
          <h1 className="CaseStudyGrid-heading">
            <EditInline field="fields.content.portfolioHeading">Latest case studies</EditInline>
          </h1>
          <h2 className="CaseStudyGrid-subheading">
            <EditInline field="fields.content.portfolioText">
              Have a look at our recently published work
            </EditInline>
          </h2>
          <div className="wrap">
            {items.map((item, index) =>
              <div
                key={index}
                className={classnames('CaseStudyGrid-itemWrap', item.title && 'has-content')}
              >
                {item.title &&
                  <p className="CaseStudyGrid-caption">
                    {item.title}
                  </p>}
                <div className="CaseStudyGrid-item">
                  {item.year &&
                    <p className="CaseStudyGrid-itemText">
                      {item.year}
                    </p>}
                  <div
                    className="CaseStudyGrid-image"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  />
                </div>
              </div>,
            )}
          </div>
        </div>
      </VisibilitySensor>
    )
  }
}

export default CaseStudyGrid
