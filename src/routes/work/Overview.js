import React from 'react'
import { Helmet } from 'react-helmet'
import { Editable } from 'tux'
import Intro from '../../components/Intro'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import CaseStudyPreview from '../../components/CaseStudyPreview'

const Overview = ({ content, hero, casestudies }) =>
  <Editable model={content}>
    <Helmet>
      <title>Aranja Studio – Work</title>
    </Helmet>
    <Section noPadding top="medium" bottom="medium">
      <Intro text="We've been busy" description="Have a look around at some of our latest projects" />
    </Section>
    <Hero hero={hero} parallax />
    {casestudies.items.map((study, index) =>
      <CaseStudyPreview key={study.fields.projectName} title={study.fields.projectName} duration={study.fields.projectDuration} description={study.fields.projectDescription} slug={study.fields.slug} img={study.fields.heroImage.fields.file.url} url={`/work/${study.fields.slug}`} alignment={index % 2 === 0 ? 'left' : 'right'}/>
    )}
  </Editable>

  export default Overview
