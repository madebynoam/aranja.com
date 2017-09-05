import React from 'react'
import Page from '../../components/Page'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import Section from '../../components/Section'
import Intro from '../../components/Intro'
import CaseStudyGrid from '../../components/CaseStudyGrid'
import FamilyGrid from '../../components/FamilyGrid'
import Clients from '../../components/Clients'
import { H1, H2, Body1 } from '../../typography'
import { Editable } from 'tux'

const Home = ({ content, hero, services, showOffs, caseStudies }) => (
  <Editable model={content}>
    <Page name="Home" home>
      <Section noPadding top="medium" bottom="medium">
        <Intro main text={['We are Aranja, ', 'a creative web studio']} />
      </Section>
      <Hero hero={hero} parallax />
      <Section bottom="xlarge">
        <Services services={services} />
      </Section>
      <Section bottom="xlarge">
        <H2 top="xlarge" center>
          Recent work
        </H2>
        <Body1 bottom="large" center>
          Take a look at some of our recent projects
        </Body1>
        <CaseStudyGrid caseStudies={caseStudies} />
      </Section>
      <Clients />
    </Page>
  </Editable>
)

export default Home
