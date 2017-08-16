import React from 'react'
import Image from './Image'
import ContentCopy from './Copy'
import VideoInDevice from '../CaseStudy/VideoInDevice'
import './styles.css'

const ContentSection = ({ section }) => {
  switch (section.sys.contentType.sys.id) {
    case 'section':
      return <ContentCopy heading={section.heading} copy={section.text} lede={section.lede} />
    
    case 'sectionImage':
      return <Image img={section.image.asset.file.url} caption={section.heading} />

    case 'sectionVideoInDevice':
      return <VideoInDevice device={section.device} heading={section.heading} copy={section.copy} video={section.video} />

    default:
      console.log(`Unknown section ${section.sys.contentType.sys.id}`)
      return null
  }
}

export default ContentSection
