import React from 'react'
import { Helmet } from 'react-helmet'
import { Editable } from 'tux'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import Section from '../../components/Section'
import Intro from '../../components/Intro'
import CaseStudyGrid from '../../components/CaseStudyGrid'
import Clients from '../../components/Clients'
import LazyLoad from 'react-lazyload'
import { H2, Body1 } from '../../typography'
import EditableAnimatedText from '../../components/AnimatedText/EditableAnimatedText'
import './styles.scss'

const Home = ({ content, hero, services, showOffs, caseStudies }) => (
  <Editable model={content}>
    <Helmet>
      <title>Aranja Studio – Welcome</title>
    </Helmet>
    <Section noPadding top="large" bottom="large">
      <Intro main text={'We are Aranja,\na creative web studio'} />
    </Section>
    <Section noPadding>
      <Hero hero={hero} parallax />
    </Section>
    <Section top="large" bottom="large" className="Home-introduction">
      <H2 bottom="xsmall" className="Home-introductionCopy">
        <EditableAnimatedText
          field="fields.content.headline"
          placeholder="Multidisciplinary team of engineers"
        >
          {content.fields.content.headline}
        </EditableAnimatedText>
      </H2>
      <Body1 className="Home-introductionCopy">
        <EditableAnimatedText
          field="fields.content.tagline"
          placeholder="We take on projects, no matter the size, and deliver products beyond expectations"
        >
          {content.fields.content.tagline}
        </EditableAnimatedText>
      </Body1>
    </Section>
    <Section top="xlarge" bottom="large">
      <Services services={services} />
    </Section>
    <Section>
      <H2 center top="xlarge" bottom="xsmall">
        <EditableAnimatedText
          field="fields.content.clientsHeading"
          placeholder="Trusted by the best"
        >
          {content.fields.content.clientsHeading}
        </EditableAnimatedText>
      </H2>
      <Body1 center bottom="large">
        <EditableAnimatedText
          field="fields.content.clientsText"
          placeholder="We've had the pleasure of working with great companies, inspiring teams and brilliant people."
        >
          {content.fields.content.clientsText}
        </EditableAnimatedText>
      </Body1>
      <Clients />
    </Section>
    <Section bottom="large">
      <H2 center top="xlarge" bottom="xsmall">
      <EditableAnimatedText
          field="fields.content.portfolioHeading"
          placeholder="Latest case studies."
        >
          {content.fields.content.portfolioHeading}
        </EditableAnimatedText>
      </H2>
      <Body1 center bottom="large">
      <EditableAnimatedText
          field="fields.content.portfolioText"
          placeholder="Check out our project highlights."
        >
          {content.fields.content.portfolioText}
        </EditableAnimatedText>
      </Body1>
      <LazyLoad once offset={200}>
        <CaseStudyGrid caseStudies={caseStudies} />
      </LazyLoad>
    </Section>
  </Editable>
)

export default Home
