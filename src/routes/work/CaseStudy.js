import React from 'react'
import { Editable } from 'tux'
import Hero from '../../components/Hero'
import Page from '../../components/Page'
import ContentSection from '../../components/ContentSection'
import Intro from '../../components/Intro'
import ArrowButton from '../../components/ArrowButton'
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
      <Section noPadding top="medium" bottom="medium">
        <Intro text={projectName} description={projectDescription} />
      </Section>
        <Hero hero={formatHero(heroImage)} />
        <Section className="CaseStudy-section">
          {sections.map((section, index) => <ContentSection section={section} key={index} />)}
        </Section>
        <Section className="CaseStudy-section" bottom="xlarge">
          <div className="ContentSection">
            <div className="CaseStudy-bottom">
              <ArrowButton to={projectOutgoingUrl}>Visit project</ArrowButton>
              <ShoutOut />
            </div>
          </div>
        </Section>
        <Section noPadding>
        <CaseStudyGrid caseStudies={caseStudies} button="View all studies" padding />
        </Section>
      </Page>
    </Editable>
  )
}

export default CaseStudy
