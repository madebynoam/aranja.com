import React from 'react'
import { Editable } from 'tux'
import Page from '../../components/Page'
import Intro from '../../components/CaseStudy/Intro'
import Hero from '../../components/Hero'
import CaseStudyPreview from '../../components/CaseStudyPreview'
import { formatHero } from '../../utils/formatters'

const Overview = ({ content, hero, casestudies }) =>
  <Editable model={content}>
    <Page name="Work">
      <Intro project="Recent work" description="We've been busy. Take a look at our latest work." />
      <Hero hero={formatHero(casestudies.items[0].fields.heroImage)} />
      {casestudies.items.map((study, index) =>
        <CaseStudyPreview key={study.fields.projectName} title={study.fields.projectName} description={study.fields.projectDescription} slug={study.fields.slug} img={study.fields.heroImage.fields.file.url} url={`/work/${study.fields.slug}`} alignment={index % 2 === 0 ? 'left' : 'right'}/>
      )}
    </Page>
  </Editable>

  export default Overview
