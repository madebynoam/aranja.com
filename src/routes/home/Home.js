import React from 'react'
import Page from '../../components/Page'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import Section from '../../components/Section'
import CaseStudyGrid from '../../components/CaseStudyGrid'
import Clients from '../../components/Clients'
import {H1, Body1} from '../../typography'
import { Editable } from 'tux'

const Home = ({ content, hero, services, showOffs, caseStudies }) =>
  <Editable model={content}>
    <Page name="Home" home>
      <Hero hero={hero} title="Teamwork is the name of the game" cover />
      <Services services={services} />
      <Section top="large">
        <H1 bottom="small">
          Recent work
        </H1>
        <CaseStudyGrid caseStudies={caseStudies} />
        <Body1>or reveal all -></Body1>
      </Section>
    </Page>
  </Editable>

export default Home
