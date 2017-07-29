import React from 'react'
import { Editable } from 'tux'
import { Body1, Body2, H1, H2, H3 } from '../typography'
import Lines from '../components/Lines'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import TeamGrid from '../components/Team/Grid'
import Section from '../components/Section'
import SectionHero from '../components/SectionHero'
import teamHeroPhoto from '../components/Team/Aranja00107.jpg'
import teamHeroPhoto2 from '../components/Team/Aranja00557.jpg'
import '../components/Team/styles.css'

const Team = ({ content, team }) => {
  return (
    <Editable model={content}>
      <div className="Team">
        <div className="Container">
          <Lines />
          <Menu />
          <Section>
            <H1 className="Team-heading" top="small">
              We are Aranja
            </H1>
            <H2 className="Team-subheading">Dedicated team of ambitious developers</H2>
            <SectionHero img={teamHeroPhoto} caption="bla" />
            <H2 bottom="small">Our story so far.</H2>
            <Body1 className="Team-introCopy" bottom="medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt laborum, cum laudantium
              dolorem natus ullam! Autem aperiam, eum deserunt quibusdam error molestias obcaecati,
              ea asperiores delectus reiciendis voluptate minima dolore temporibus, veritatis rerum
              quo at? Nesciunt aliquid sit consectetur, odio voluptate iusto!
            </Body1>
            <TeamGrid />
            <H2 top="medium" bottom="small" center>
              Play hard, work harder.
            </H2>
            <Body1 bottom="medium" center>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt laborum, cum laudantium
              dolorem natus ullam! Autem aperiam, eum deserunt quibusdam error molestias obcaecati,
              ea asperiores delectus reiciendis voluptate minima dolore temporibus, veritatis rerum
              quo at? Nesciunt aliquid sit consectetur, odio voluptate iusto, yes I said veritatis
              rerum quo at. Boo yah.
            </Body1>
            <SectionHero img={teamHeroPhoto2} caption="bla" />
          </Section>
        </div>
        <Footer />
      </div>
    </Editable>
  )
}
export default Team
