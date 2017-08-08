import React from 'react'
import { Editable } from 'tux'
import ReactMarkdown from 'react-markdown'
import { Body1, Body2, H1, H2, H3 } from '../typography'
import Lines from '../components/Lines'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Section from '../components/Section'
import SectionHero from '../components/SectionHero'
import CaseStudyHero from '../components/CaseStudyHero'
import NextUp from '../components/NextUp'
import Button from '../components/Button'
import CSScreenshot from '../components/CaseStudy/Screenshot'
import CSCTA from '../components/CaseStudy/CTA'
import Meta from '../components/CaseStudy/Meta'
import '../components/CaseStudy/styles.css'

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

const CaseStudies = ({ content, casestudies }) => {
  const study = casestudies.items[0].fields
  const {
    company,
    excerpt,
    copyChapter1,
    copyChapter2,
    copyChapter3,
    heroImage,
    period,
    projectScreenshot,
    contentImage,
  } = study
  return (
    <Editable model={content}>
      <div className="CaseStudies">
        <div className="Container">
          <Lines />
          <CaseStudyHero company={company} img={heroImage.asset.file.url} />
          <Section>
            {copyChapter1 && <Markdown source={copyChapter1} />}
            {projectScreenshot &&
              <CSScreenshot
                img={projectScreenshot.asset.file.url}
                caption="Screenshot showing Kolibri's predominate card design in action."
              />}
            {copyChapter2 && <Markdown source={copyChapter2} />}
            {contentImage &&
              <CSScreenshot
                img={contentImage.asset.file.url}
                caption="This recurring expanding chapter selector was one of many unique challenges we faced."
              />}
            {copyChapter3 && <Markdown source={copyChapter3} />}
          </Section>
          <NextUp />
        </div>
        <Footer />
      </div>
    </Editable>
  )
}
export default CaseStudies
