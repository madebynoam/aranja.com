import React from 'react'
import { Editable } from 'tux'
import Lines from '../components/Lines'
import Footer from '../components/Footer'
import { Body1, Body2, H1, H2 } from '../typography'
import Menu from '../components/Menu'
import Section from '../components/Section'
import CSHero from '../components/CaseStudy/Hero'
import CSScreenshot from '../components/CaseStudy/Screenshot'
import CSCTA from '../components/CaseStudy/CTA'
import '../components/CaseStudy/styles.css'

const CaseStudies = ({ content, casestudies }) => {
  const study = casestudies.items[0].fields

  return (
    <Editable model={content}>
      {console.log(study)}
      <div className="CaseStudies">
        <div className="Container">
          <Lines />
          <Menu />
          <CSHero img={study.heroImage.asset.file.url} caption={study.company} />
          <Section>
            <H1 top="medium" bottom="small">
              {study.company}
            </H1>
            <Body1 bottom="small" className="CaseStudy-excerpt">
              {study.excerpt}
            </Body1>
            <H2 top="small" bottom="small">
              Challenges
            </H2>
            <Body1 className="CaseStudy-challenges">
              {study.copy}
            </Body1>
            <CSScreenshot
              img={study.projectScreenshot.asset.file.url}
              caption="Screenshot showing Kolibri's predominate card design in action."
            />
            <H2 top="small" bottom="small">
              Final product
            </H2>
            <Body1 className="CaseStudy-challenges">
              {study.copy}
            </Body1>
          </Section>
          <CSCTA />
        </div>
        <Footer />
      </div>
    </Editable>
  )
}
export default CaseStudies
