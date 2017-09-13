import React from 'react'
import { Helmet } from 'react-helmet'
import { Editable } from 'tux'
import Hero from '../../components/Hero'
import ContentSection from '../../components/ContentSection'
import Intro from '../../components/Intro'
import ArrowButton from '../../components/ArrowButton'
import ShoutOut from '../../components/CaseStudy/ShoutOut'
import Section from '../../components/Section'
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
      <Helmet>
        <title>{`Aranja Studio – ${projectName}`}</title>
      </Helmet>
      <Section noPadding top="large" bottom="large">
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
        {/* // Todo */}
        {/* <Section noPadding>
          <NextUp next={caseStudies.items[0]} />
        </Section> */}
    </Editable>
  )
}

export default CaseStudy
