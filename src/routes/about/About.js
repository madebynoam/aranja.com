import React from 'react'
import { Helmet } from 'react-helmet'
import { Editable } from 'tux'
import { Body1, H1, H2 } from '../../typography'
import TeamGrid from '../../components/Team/Grid'
import FamilyGrid from '../../components/FamilyGrid'
import Section from '../../components/Section'
import SectionHero from '../../components/SectionHero'
import Hero from '../../components/Hero'
import Intro from '../../components/Intro'
import AnimatedText from '../../components/AnimatedText'
import EditableAnimatedText from '../../components/AnimatedText/EditableAnimatedText'
import teamHeroPhoto1 from '../../components/Team/foosball.jpg'
import teamHeroPhoto2 from '../../components/Team/aranja-hack-night.jpg'
import './styles.scss'

const About = ({ content, team, hero, collage }) => (
  <Editable model={content}>
    <Helmet>
      <title>Aranja Studio – About</title>
    </Helmet>
    <Section noPadding top="large" bottom="large">
      <Intro
        text="About us"
        description="We are a team of developers, specialized in web technologies."
      />
    </Section>
    <Hero hero={hero} />
    <Section>
      <div className="Team-copy u-paddingBottomXLarge">
        <div className="Team-copyPart">
          <H1 center>
            <EditableAnimatedText
              field="fields.content.headline"
              placeholder="In a nutshell"
            >
              {content.fields.content.headline}
            </EditableAnimatedText>
          </H1>
        </div>
        <div className="Team-copyPart">
          <Body1 faint>
            <EditableAnimatedText
              field="fields.content.tagline"
              placeholder="Aranja is a small web studio based and raised in Iceland. Our goal, to improve the web, is achieved with a motivated team."
            >
              {content.fields.content.tagline}
            </EditableAnimatedText>
          </Body1>
        </div>
      </div>
      <TeamGrid images={collage} />
      <H2 bottom="xsmall" center>
        <EditableAnimatedText
          field="fields.content.section1Headline"
          placeholder="Focus on quality"
        >
          {content.fields.content.section1Headline}
        </EditableAnimatedText>
      </H2>
      <Body1 bottom="xlarge" center>
        <EditableAnimatedText
          field="fields.content.section1Tagline"
          placeholder={
            'We focus on doing quality work, keeping the\nclient happy and the community amazed.'
          }
        >
          {content.fields.content.section1Tagline}
        </EditableAnimatedText>
      </Body1>
      <SectionHero img={teamHeroPhoto1} caption="Hard at work" />
      <div className="Team-copy Team-copy--centered">
        <Body1 top="xlarge" bottom="xlarge">
          <EditableAnimatedText
            field="fields.content.section2Copy"
            placeholder={'Placeholder, nevermind me.'}
          >
            {content.fields.content.section2Copy}
          </EditableAnimatedText>
        </Body1>
      </div>
      <SectionHero img={teamHeroPhoto2} caption="Hacking on a side-project" />
    </Section>
    <Section>
      <H2 top="xlarge" center>
        <EditableAnimatedText
          field="fields.content.section3Headline"
          placeholder="One family"
        >
          {content.fields.content.section3Headline}
        </EditableAnimatedText>
      </H2>
      <Body1 bottom="xlarge" center>
        <EditableAnimatedText
          field="fields.content.section3Tagline"
          placeholder="Looking forward to Mondays since 2014."
        >
          {content.fields.content.section3Tagline}
        </EditableAnimatedText>
      </Body1>
      <FamilyGrid />
    </Section>
  </Editable>
)

export default About
