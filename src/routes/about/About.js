import React from 'react'
import { Helmet } from 'react-helmet'
import { Editable } from 'tux'
import { Body1, H1, H2, H3 } from '../../typography'
import Page from '../../components/Page'
import TeamGrid from '../../components/Team/Grid'
import FamilyGrid from '../../components/FamilyGrid'
import Section from '../../components/Section'
import SectionHero from '../../components/SectionHero'
import Hero from '../../components/Hero'
import Intro from '../../components/Intro'
import AnimatedText from '../../components/AnimatedText'
import teamHeroPhoto2 from '../../components/Team/Aranja00557.jpg'
import teamHeroPhoto3 from '../../components/Team/Aranja00711-Edit.jpg'
import '../../components/Team/styles.css'

const About = ({ content, team, hero, collage }) => (
  <Editable model={content}>
    <Page name="About">
      <Helmet>
        <title>Aranja Studio – About</title>
      </Helmet>
      <Section noPadding top="medium" bottom="medium">
        <Intro
          text="About our company"
          description="We are a web development studio based out of beautiful Reykjavik, Iceland."
        />
      </Section>
      <Hero hero={hero} />
      <Section bottom="large">
        <div className="Team-copy u-paddingBottomXLarge u-paddingTopXLarge">
          <div className="Team-copyPart">
            <H1 center>
              <AnimatedText>{'In a nutshell'}</AnimatedText>
            </H1>
          </div>
          <div className="Team-copyPart">
            <Body1 faint>
              <AnimatedText>
                {
                  'Aranja is a small web studio based and raised in Iceland. Our goal, to improve the web, is only achieved with a passionate team that is motivated and happy. We believe that the community is what makes the web what it is and we intend to support that.'
                }
              </AnimatedText>
            </Body1>
          </div>
        </div>
        <TeamGrid images={collage} />
        <H2 top="xlarge" bottom="xsmall" center>
          <AnimatedText>{'Focus on quality'}</AnimatedText>
        </H2>
        <Body1 bottom="large" center>
          <AnimatedText>
            {
              'We focus on doing quality work, keeping the\nclient happy and the community amazed.'
            }
          </AnimatedText>
        </Body1>
        <SectionHero img={teamHeroPhoto2} caption="Hard at work" />
        <div className="Team-copy Team-copy--centered">
          <Body1 top="large" bottom="large">
            Instead of being a group of coworkers that only work together, we
            are friends that just happen to also work together. Frequently, we
            meetup after work to see the latest Marvel movie, hack on a
            side-project or just to enjoy a dinner with our families.
          </Body1>
        </div>
        <SectionHero img={teamHeroPhoto3} caption="Hacking on a side-project" />
      </Section>
      <Section top="medium" bottom="medium">
        <H3 top="medium" bottom="xsmall" center>
          <AnimatedText>{'One Family'}</AnimatedText>
        </H3>
        <Body1 bottom="large" center>
          <AnimatedText>{'Looking forward to Mondays since 2013'}</AnimatedText>
        </Body1>
        <FamilyGrid />
      </Section>
    </Page>
  </Editable>
)

export default About
