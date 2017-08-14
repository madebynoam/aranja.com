import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Body1, H1, H2, H3 } from '../../typography'
import Screenshot from '../CaseStudy/Screenshot'

const WrappedBody = ({ children, ...props }) =>
  <div className="CaseStudy-copy">
    <Body1 {...props}>
      {children}
    </Body1>
  </div>

const Markdown = ({ source }) =>
  <ReactMarkdown
    source={source}
    renderers={{
      Heading: ({ level, ...props }) =>
        level === 1
          ? <H1 {...props} />
          : level === 2 ? <H2 top="small" bottom="small" {...props} /> : <H3 {...props} />,
      paragraph: props => <WrappedBody {...props} />,
    }}
  />

const ContentSection = ({ section }) => {
  switch (section.sys.contentType.sys.id) {
    case 'section':
      return <Markdown source={section.text} />
    
    case 'sectionImage':
      return <Screenshot img={section.image.asset.file.url} caption={section.heading} />

    default:
      console.log(`Unknown section ${section.type}`)
      return null
  }
}

export default ContentSection
