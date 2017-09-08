import React from 'react'
import classNames from 'classnames'
import Image from './Image'
import Video from './Video'
import ContentCopy from './Copy'
import DeviceSection from './Device'
import ScreenshotsGalore from './ScreenshotsGalore'
import TechStack from './TechStack'
import Floater from './Floater'
import { H2 } from '../../typography'

import './styles.css'

const Wrapper = ({ children, tall, gray, className }) => (
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
)

const ContentSection = ({ section }) => {
  if (!section) return
  const sectionId = section.sys.contentType.sys.id

  switch (sectionId) {
    case 'section': {
      const { lede, heading, text, style } = section.fields
      return (
        <Wrapper tall={lede}>
          <ContentCopy
            heading={heading}
            copy={text}
            lede={lede}
            style={style}
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
      const { video, fallbackVideo, description } = section.fields
      return (
        <Wrapper tall>
          <Video
            video={video && video.fields.file.url}
            fallbackVideo={fallbackVideo && fallbackVideo.fields.file.url}
            description={description}
          />
        </Wrapper>
      )
    }

    case 'sectionSlideshow': {
      // todo
      // return <Slideshow />
      break
    }

    case 'sectionTechStack': {
      const { technology } = section.fields
      return (
        <Wrapper>
          <H2 center bottom="medium">Technology used</H2>
          <TechStack techStack={technology} />
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
            image={image.fields.file.url}
          />
        </Wrapper>
      )
    case 'sectionScreenshotsGalore':
      const { screenshots } = section.fields
      return (
        <Wrapper gray>
          <ScreenshotsGalore screenshots={screenshots} />
        </Wrapper>
      )

    case 'sectionFloatingScreenshots': {
      const { topDevice, centerDevice, bottomDevice } = section.fields
      return (
        <Wrapper>
          <Floater
            topDevice={topDevice.fields.file.url}
            centerDevice={centerDevice.fields.file.url}
            bottomDevice={bottomDevice.fields.file.url}
          />
        </Wrapper>
      )
    }

    default:
      console.log(`Unknown section ${sectionId}`)
      return null
  }
}

export default ContentSection
