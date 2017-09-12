import React from 'react'
import { Helmet } from 'react-helmet'
import { Editable } from 'tux'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import Section from '../../components/Section'
import Intro from '../../components/Intro'
import CaseStudyGrid from '../../components/CaseStudyGrid'
import Clients from '../../components/Clients'
import { H2, Body1 } from '../../typography'
import AnimatedText from '../../components/AnimatedText'
import './styles.scss'

const Home = ({ content, hero, services, showOffs, caseStudies }) => (
  <Editable model={content}>
    <Helmet>
      <title>Aranja Studio – Welcome</title>
    </Helmet>
    <Section noPadding top="medium" bottom="medium">
      <Intro main text={'We are Aranja,\na creative web studio'} />
    </Section>
    <Section noPadding>
      <Hero hero={hero} parallax />
    </Section>
    <Section top="large" bottom="large" className="Home-introduction">
      <H2 center bottom="xsmall">
        <AnimatedText>Multidisciplinary team of engineers</AnimatedText>
      </H2>
      <Body1 center>
        <AnimatedText>
          We take on projects, big and small, and deliver products beyond
          expectations.
        </AnimatedText>
      </Body1>
    </Section>
    <Section top="xlarge" bottom="large">
      <Services services={services} />
    </Section>
    <Section>
      <H2 center top="xlarge" bottom="xsmall">
        <AnimatedText>Trusted by the best</AnimatedText>
      </H2>
      <Body1 center bottom="large">
        <AnimatedText breakOnMobile>
          {
            "We've had the pleasure of working with great companies, \ninspiring teams and brilliant people."
          }
        </AnimatedText>
      </Body1>
      <Clients />
    </Section>
    <Section bottom="xlarge">
      <H2 center top="xlarge" bottom="xsmall">
        <AnimatedText>Case Studies</AnimatedText>
      </H2>
      <Body1 center bottom="large">
        <AnimatedText>Check out our project highlights.</AnimatedText>
      </Body1>
      <CaseStudyGrid caseStudies={caseStudies} />
    </Section>
  </Editable>
)

export default Home
