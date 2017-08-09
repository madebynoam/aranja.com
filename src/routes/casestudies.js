import React from 'react'
import { Editable } from 'tux'
import ReactMarkdown from 'react-markdown'
import { Legend, Body1, Body2, H1, H2, H3 } from '../typography'
import Section from '../components/Section'
import Hero from '../components/Hero'
import Page from '../components/Page'
import SectionHero from '../components/SectionHero'
import NextUp from '../components/NextUp'
import Button from '../components/Button'
import Screenshot from '../components/CaseStudy/Screenshot'
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
      <Page name="Case Studies">
        <Hero
          intro="Case study #001"
          img={heroImage.asset.file.url}
          title="Team work is the name of the game"
        />
        <Section>
          {copyChapter1 && <Markdown source={copyChapter1} />}
          {projectScreenshot &&
            <Screenshot
              img={projectScreenshot.asset.file.url}
              caption="Screenshot showing Kolibri's predominate card design in action."
            />}
          {copyChapter2 && <Markdown source={copyChapter2} />}
          {contentImage &&
            <Screenshot
              img={contentImage.asset.file.url}
              caption="This recurring expanding chapter selector was one of many unique challenges we faced."
            />}
          {copyChapter3 && <Markdown source={copyChapter3} />}
        </Section>
        <NextUp />
      </Page>
    </Editable>
  )
}
export default CaseStudies
