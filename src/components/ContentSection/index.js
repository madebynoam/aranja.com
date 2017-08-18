import React from 'react'
import classNames from 'classnames'
import Image from './Image'
import ContentCopy from './Copy'
import ContentThreeColumnCopy from './ThreeColumnCopy'
import DeviceSection from '../DeviceSection'
import ContentQuote from '../ContentQuote'
import './styles.css'

const Wrapper = ({ children, narrow }) =>
  <div className={classNames('ContentSection', narrow && 'ContentSection--narrow')}>
    {children}
  </div>

const ContentSection = ({ section }) => {
  const { lede, heading, text } = section
  switch (section.sys.contentType.sys.id) {
    case 'section':
      return (
        <Wrapper narrow={lede}>
          <ContentCopy
            heading={heading}
            copy={text}
            lede={lede}
          />
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

    // todo: something fun
    // case 'sectionImage':
    //   return (
    //     <Wrapper>
    //       <Image img={section.image.asset.file.url} caption={section.heading} />
    //     </Wrapper>
    //   )

    case 'sectionQuote':
      return (
        <Wrapper narrow>
          <ContentQuote attestant={section.attestant} quote={section.quote} />
        </Wrapper>
      )

    case 'sectionVideoInDevice':
      return (
        <Wrapper narrow>
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
