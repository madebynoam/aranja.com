import React from 'react'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Lines from '../components/Lines'
import Menu from '../components/Menu'
import CaseStudyGrid from '../components/CaseStudyGrid'
import Footer from '../components/Footer'
import Clients from '../components/Clients'
import { Editable } from 'tux'

const Home = ({ content, services, showOffs }) =>
  <Editable model={content}>
    <div className="Home">
      <div className="Container">
        <Lines />
        {/* <Menu /> */}
        <Intro />
        <Services services={services} />
        <Clients />
        <CaseStudyGrid />
      </div>
      <Footer />
    </div>
  </Editable>

export default Home
