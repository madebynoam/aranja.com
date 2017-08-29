import React from 'react'
import { Editable } from 'tux'
import Hero from '../../components/Hero'
import Page from '../../components/Page'
import ContentSection from '../../components/ContentSection'
import Intro from '../../components/CaseStudy/Intro'
import CaseStudyButton from '../../components/CaseStudy/Button'
import ShoutOut from '../../components/CaseStudy/ShoutOut'
import Section from '../../components/Section'
import CaseStudyGrid from '../../components/CaseStudyGrid'
import { formatHero } from '../../utils/formatters'

const CaseStudy = ({ content, caseStudy, caseStudies }) => {
  const {
    heroImage,
    projectName,
    projectDescription,
    projectOutgoingUrl,
    sections = [],
  } = caseStudy.fields

  return (
    <Editable model={content}>
      <Page name="Work">
        <Intro project={projectName} description={projectDescription} />
        <Hero hero={formatHero(heroImage)} />
        <Section className="CaseStudy-section">
          {sections.map((section, index) => <ContentSection section={section} key={index} />)}
        </Section>
        <Section className="CaseStudy-section">
          <div className="ContentSection">
            <div className="CaseStudy-bottom">
              <CaseStudyButton to={projectOutgoingUrl}>Visit project</CaseStudyButton>
              <ShoutOut />
            </div>
          </div>
        </Section>
        <CaseStudyGrid caseStudies={caseStudies} />
      </Page>
    </Editable>
  )
}

export default CaseStudy
