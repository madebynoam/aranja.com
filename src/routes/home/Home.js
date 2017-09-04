import React from 'react'
import Page from '../../components/Page'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import Section from '../../components/Section'
import CaseStudyGrid from '../../components/CaseStudyGrid'
import FamilyGrid from '../../components/FamilyGrid'
import Clients from '../../components/Clients'
import { H2, Body1 } from '../../typography'
import { Editable } from 'tux'

const Home = ({ content, hero, services, showOffs, caseStudies }) => (
  <Editable model={content}>
    <Page name="Home" home>
      <Hero hero={hero} text cover />
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
      <Section top="xlarge" bottom="xlarge">
        <H2 center>
          One family
        </H2>
        <Body1 bottom="large" center>
          Looking forward to Mondays since 2013
        </Body1>
        <FamilyGrid />
      </Section>
      <Clients />
    </Page>
  </Editable>
)

export default Home
