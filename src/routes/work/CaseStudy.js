import React from 'react'
import { Editable } from 'tux'
import Hero from '../../components/Hero'
import Page from '../../components/Page'
import NextUp from '../../components/NextUp'
import ContentSection from '../../components/ContentSection'
import Section from '../../components/Section'
import { formatHero } from '../../utils/formatters'

const CaseStudy = ({ content, caseStudy }) => {
  const {
    heroImage,
    company,
    sections = [],
  } = caseStudy.fields

  return (
    <Editable model={content}>
      <Page name="Case study">
        <Hero hero={formatHero(heroImage)} title={company} darken />
        <Section className="CaseStudy-section">
          {sections.map((section, index) => <ContentSection section={section} key={index} />)}
        </Section>
        <NextUp nextPage="Something" url="/" />
      </Page>
    </Editable>
  )
}

export default CaseStudy
