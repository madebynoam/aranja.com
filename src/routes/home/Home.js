import React from 'react'
import { Helmet } from 'react-helmet'
import Page from '../../components/Page'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import Section from '../../components/Section'
import Intro from '../../components/Intro'
import CaseStudyGrid from '../../components/CaseStudyGrid'
import Clients from '../../components/Clients'
import { H2, Body1 } from '../../typography'
import AnimatedText from '../../components/AnimatedText'
import { Editable } from 'tux'

const Home = ({ content, hero, services, showOffs, caseStudies }) => (
  <Editable model={content}>
    <Helmet>
      <title>Aranja Studio – Welcome</title>
    </Helmet>
    <Section noPadding top="medium" bottom="medium">
      <Intro main text={'We are Aranja,\na creative web studio'} />
    </Section>
    <Hero hero={hero} parallax />
    <Section bottom="xlarge">
      <Services services={services} />
    </Section>
    <Section>
      <H2 center top="xlarge" bottom="xsmall">
        <AnimatedText>Trusted by the best</AnimatedText>
      </H2>
      <Body1 center bottom="large">
        <AnimatedText>
          {'We\'ve had the pleasure of working with great companies,\ninspiring teams and brilliant people.'}
        </AnimatedText>
      </Body1>
      <Clients />
    </Section>
    <Section bottom="xlarge">
      <H2 center top="xlarge" bottom="xsmall">
        <AnimatedText>Case Studies</AnimatedText>
      </H2>
      <Body1 center bottom="large">
        <AnimatedText>
          Check out our project highlights.
        </AnimatedText>
      </Body1>
      <CaseStudyGrid caseStudies={caseStudies} />
    </Section>
  </Editable>
)

export default Home
