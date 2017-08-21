import React from 'react'
import Page from '../../components/Page'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import CaseStudyGrid from '../../components/CaseStudyGrid'
import Clients from '../../components/Clients'
import { Editable } from 'tux'
import img01 from '../../assets/Aranja00067.jpg'

const Home = ({ content, services, showOffs }) =>
  <Editable model={content}>
    <Page name="Home" home>
      <Hero intro="Welcome" img={img01} title="Teamwork is the name of the game" cover />
      <Services services={services} />
      <Clients />
      <CaseStudyGrid />
    </Page>
  </Editable>

export default Home
