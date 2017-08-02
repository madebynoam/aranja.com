import React from 'react'
import { Editable } from 'tux'
import { Chapter, Body1, Body2, H1, H3 } from '../typography'
import Lines from '../components/Lines'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import LogoRoll from '../components/LogoRoll'
import TeamGrid from '../components/Team/Grid'
import Section from '../components/Section'
import SectionHero from '../components/SectionHero'
import Careers from '../components/Careers'
import NextUp from '../components/NextUp'
import teamHeroPhoto from '../components/Team/Aranja00107.jpg'
import teamHeroPhoto2 from '../components/Team/Aranja00557.jpg'
import teamHeroPhoto3 from '../components/Team/Aranja00711-Edit.jpg'
import '../components/Team/styles.css'

const Team = ({ content, team }) => {
  return (
    <Editable model={content}>
      <div className="Team">
        <div className="Container">
          <Lines />
          <Menu />
          <Section>
            <Chapter>Who we are</Chapter>
            <H3 className="Team-heading">A dedicated team of ambitious developers</H3>
          </Section>
          <SectionHero img={teamHeroPhoto} />
          <Section>
            <H3 bottom="medium" center>
              We team up with some great companies
            </H3>
            <LogoRoll />
            <H3 top="medium" bottom="small" center>
              To make engaging products
            </H3>
            <Body1 className="Team-copy" bottom="large">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt laborum, cum laudantium
              dolorem natus ullam! Autem aperiam, eum deserunt quibusdam error molestias obcaecati,
              ea asperiores delectus reiciendis voluptate minima dolore temporibus, veritatis rerum
              quo at? Nesciunt aliquid sit consectetur, odio voluptate iusto! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Sed reprehenderit atque, necessitatibus iste
              mollitia quo corrupti dolorum officia voluptates, quod.
            </Body1>
            <TeamGrid />
            <H3 top="large" bottom="small" center>
              Play hard, work harder.
            </H3>
            <Body1 className="Team-copy" bottom="medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt laborum, cum laudantium
              dolorem natus ullam! Autem aperiam, eum deserunt quibusdam error molestias obcaecati,
              ea asperiores delectus reiciendis voluptate minima dolore temporibus, veritatis rerum
              quo at? Nesciunt aliquid sit consectetur, odio voluptate iusto, yes I said veritatis
              rerum quo at. Boo yah.
            </Body1>
            <SectionHero img={teamHeroPhoto2} caption="bla" />
            <H3 top="large" bottom="small" center>
              Culture.
            </H3>
            <Body1 className="Team-copy" bottom="medium">
              Hack nights. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt laborum,
              cum laudantium dolorem natus ullam! Autem aperiam, eum deserunt quibusdam error
              molestias obcaecati, ea asperiores delectus reiciendis voluptate minima dolore
              temporibus, veritatis rerum quo at? Nesciunt aliquid sit consectetur, odio voluptate
              iusto, yes I said veritatis rerum quo at. Boo yah.
            </Body1>
            <SectionHero img={teamHeroPhoto3} caption="bla" />
            <Careers />
          </Section>
          <NextUp />
        </div>
        <Footer />
      </div>
    </Editable>
  )
}
export default Team
