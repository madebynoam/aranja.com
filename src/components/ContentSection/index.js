import React from 'react'
import Image from './Image'
import ContentCopy from './Copy'
import VideoInDevice from '../VideoInDevice'
import './styles.css'

const Wrapper = ({ children }) =>
  <div className="ContentSection">
    {children}
  </div>

const ContentSection = ({ section }) => {
  switch (section.sys.contentType.sys.id) {
    case 'section':
      return (
        <Wrapper>
          <ContentCopy
            heading={section.heading}
            copy={section.text}
            lede={section.lede}
          />
        </Wrapper>
      )

    case 'sectionImage':
      return (
        <Wrapper>
          <Image img={section.image.asset.file.url} caption={section.heading} />
        </Wrapper>
      )

    case 'sectionVideoInDevice':
      return (
        <Wrapper>
          <VideoInDevice
            device={section.device}
            heading={section.heading}
            copy={section.copy}
            video={section.video}
          />
        </Wrapper>
      )

    default:
      console.log(`Unknown section ${section.sys.contentType.sys.id}`)
      return null
  }
}

export default ContentSection
