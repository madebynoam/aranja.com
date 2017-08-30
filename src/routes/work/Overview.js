import React from 'react'
import { Editable } from 'tux'
import Page from '../../components/Page'
import Intro from '../../components/CaseStudy/Intro'
import Hero from '../../components/Hero'
import CaseStudyPreview from '../../components/CaseStudyPreview'

const Overview = ({ content, hero, casestudies }) =>
  <Editable model={content}>
    <Page name="Work">
      <Intro project="We've been busy" description="Have a look around at some of our latest projects" />
      <Hero hero={hero} />
      {casestudies.items.map((study, index) =>
        <CaseStudyPreview key={study.fields.projectName} title={study.fields.projectName} duration={study.fields.projectDuration} description={study.fields.projectDescription} slug={study.fields.slug} img={study.fields.heroImage.fields.file.url} url={`/work/${study.fields.slug}`} alignment={index % 2 === 0 ? 'left' : 'right'}/>
      )}
    </Page>
  </Editable>

  export default Overview
