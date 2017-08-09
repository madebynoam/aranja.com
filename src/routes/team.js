import React from 'react'
import { Editable } from 'tux'
import { Legend, Body1, Body2, H1, H2, H3 } from '../typography'
import Page from '../components/Page'
import LogoRoll from '../components/LogoRoll'
import TeamGrid from '../components/Team/Grid'
import Section from '../components/Section'
import SectionHero from '../components/SectionHero'
import Careers from '../components/Careers'
import NextUp from '../components/NextUp'
import Hero from '../components/Hero'
import teamHeroPhoto2 from '../components/Team/Aranja00557.jpg'
import teamHeroPhoto3 from '../components/Team/Aranja00711-Edit.jpg'
import '../components/Team/styles.css'
import img01 from '../assets/Aranja00107-Edit.jpg'

const Team = ({ content, team }) => {
  return <Editable model={content}>
      <Page name="Team">
        <Hero intro="About us" img={img01} title="We are a web development studio" />
        <Section bottom="large">
          <H3 bottom="small" center>
            We team up with great companies…
          </H3>
          <LogoRoll />
          <H3 top="small" bottom="medium" center>
            to make engaging products
          </H3>
          <div className="Team-copy">
            <Body1 top="small" bottom="large" center>
              Aranja is a small web studio based and raised in Iceland. Our goal, to improve the web, is only achieved with a passionate team that is motivated and happy. We believe that the community is what makes the web what it is and we intend to support that.
            </Body1>
          </div>
          <TeamGrid />
          <H3 top="large" bottom="small" center>
            Focus on quality
          </H3>
          <div className="Team-copy">
            <Body1 bottom="medium" center>
              We focus on doing quality work, keeping the client happy and the community amazed.
            </Body1>
          </div>
          <SectionHero img={teamHeroPhoto2} caption="Hard at work" />
          <div className="Team-copy">
            <Body1 top="medium" bottom="medium" center>
              Instead of being a group of coworkers that only work together, we are friends that just happen to also work together. Frequently, we meetup after work to see the latest Marvel movie, hack on a side-project or just to enjoy a dinner with our families.
            </Body1>
          </div>
          <SectionHero img={teamHeroPhoto3} caption="Hacking on a side-project" />
        </Section>
        <NextUp nextPage="Case Studies" url="/casestudies" />
      </Page>
    </Editable>
}
export default Team
