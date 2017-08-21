import React from 'react'
import classNames from 'classnames'
import Image from './Image'
import ContentCopy from './Copy'
import ContentThreeColumnCopy from './ThreeColumnCopy'
import DeviceSection from '../DeviceSection'
import ContentQuote from '../ContentQuote'
import CaseStudyButton from '../CaseStudy/Button'
import ShoutOut from '../CaseStudy/ShoutOut'

import './styles.css'

const Wrapper = ({ children, narrow, gray }) =>
  <div className={classNames('ContentSection', narrow && 'ContentSection--narrow', gray && 'ContentSection--gray')}>
    {children}
  </div>

const ContentSection = ({ section }) => {
  const { lede, heading, text, closing, half } = section
  switch (section.sys.contentType.sys.id) {
    case 'section':
      return (
        <Wrapper narrow={lede}>
          <ContentCopy
            heading={heading}
            copy={text}
            lede={lede}
            closing={closing}
          />
        </Wrapper>
      )

    case 'sectionClosing':
      return (
        <Wrapper>
          <ContentCopy heading={heading} copy={text} half={half}/>
          <CaseStudyButton key="case study">Visit project</CaseStudyButton>
          <ShoutOut key="shout out" />
        </Wrapper>
      )

    case 'sectionThreeColumnCopy':
      return (
        <Wrapper>
          <ContentThreeColumnCopy
            heading={section.heading}
            column1Subheading={section.column1Subheading}
            column1Copy={section.column1Copy}
            column2Subheading={section.column2Subheading}
            column2Copy={section.column2Copy}
            column3Subheading={section.column3Subheading}
            column3Copy={section.column3Copy}
          />
        </Wrapper>
      )

    case 'sectionImage':
      return (
        <Wrapper narrow>
          <Image img={section.image.asset.file.url} caption={section.heading} />
        </Wrapper>
      )

    case 'sectionQuote':
      return (
        <Wrapper narrow>
          <ContentQuote attestant={section.attestant} quote={section.quote} />
        </Wrapper>
      )

    case 'sectionVideoInDevice':
      return (
        <Wrapper narrow gray>
          <DeviceSection
            device={section.device}
            heading={section.heading}
            copy={section.copy}
            image={section.image}
          />
        </Wrapper>
      )

    default:
      console.log(`Unknown section ${section.sys.contentType.sys.id}`)
      return null
  }
}

export default ContentSection
