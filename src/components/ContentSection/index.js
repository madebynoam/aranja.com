import React from 'react'
import classNames from 'classnames'
import Image from './Image'
import Video from './Video'
import ContentCopy from './Copy'
import ContentThreeColumnCopy from './ThreeColumnCopy'
import IntroSection from './Intro'
import DeviceSection from '../DeviceSection'
import ContentQuote from '../ContentQuote'
import CaseStudyButton from '../CaseStudy/Button'
import ShoutOut from '../CaseStudy/ShoutOut'

import './styles.css'

const Wrapper = ({ children, tall, gray, className }) =>
  <div
    className={classNames(
      className,
      'ContentSection',
      tall && 'ContentSection--tall',
      gray && 'ContentSection--gray'
    )}
  >
    {children}
  </div>

const ContentSection = ({ section }) => {
  if (!section) return
  const sectionId = section.sys.contentType.sys.id

  switch (sectionId) {
    case 'section': {
      const { lede, heading, text, closing } = section.fields
      return (
        <Wrapper tall={lede}>
          <ContentCopy
            heading={heading}
            copy={text}
            lede={lede}
            closing={closing}
          />
        </Wrapper>
      )
    }

    case 'sectionIntro':
      const { partners, period, awards } = section.fields
      return (
        <Wrapper gray className="IntroSection-wrapper">
          <IntroSection partners={partners} period={period} awards={awards} />
          <CaseStudyButton>Visit project</CaseStudyButton>
        </Wrapper>
      )

    case 'sectionThreeColumnCopy': {
      const {
        heading,
        column1Subheading,
        column1Copy,
        column2Subheading,
        column2Copy,
        column3Subheading,
        column3Copy
      } = section.fields
      return (
        <Wrapper>
          <ContentThreeColumnCopy
            heading={heading}
            column1Subheading={column1Subheading}
            column1Copy={column1Copy}
            column2Subheading={column2Subheading}
            column2Copy={column2Copy}
            column3Subheading={column3Subheading}
            column3Copy={column3Copy}
          />
        </Wrapper>
      )
    }

    case 'sectionImage': {
      const { image, heading } = section.fields
      return (
        <Wrapper tall>
          <Image img={image && image.fields.file.url} caption={heading} />
        </Wrapper>
      )
    }

    case 'sectionVideo': {
      const { video, description } = section.fields
      return (
        <Wrapper tall>
          <Video video={video && video.fields.file.url} description={description} />
        </Wrapper>
      )
    }

    case 'sectionSlideshow': {
      // todo
      // return <Slideshow />
      break
    }

    case 'sectionQuote': {
      const { attestant, quote } = section.fields
      return (
        <Wrapper tall>
          <ContentQuote attestant={attestant} quote={quote} />
        </Wrapper>
      )
    }

    case 'sectionVideoInDevice':
      const { device, heading, copy, image } = section.fields
      return (
        <Wrapper gray>
          <DeviceSection
            device={device}
            heading={heading}
            copy={copy}
            image={image}
          />
        </Wrapper>
      )

    case 'sectionClosing': {
      const { heading, text, half } = section.fields
      return (
        <Wrapper>
          <ContentCopy heading={heading} copy={text} half={half} />
          <CaseStudyButton key="case study">Visit project</CaseStudyButton>
          <ShoutOut key="shout out" />
        </Wrapper>
      )
    }

    default:
      console.log(`Unknown section ${sectionId}`)
      return null
  }
}

export default ContentSection
