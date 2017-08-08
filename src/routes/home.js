import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Lines from '../components/Lines'
import Header from '../components/Header'
import CaseStudyGrid from '../components/CaseStudyGrid'
import Footer from '../components/Footer'
import Clients from '../components/Clients'
import { Editable } from 'tux'

const Home = ({ content, services, showOffs }) =>
  <Editable model={content}>
    <div className="Home">
      <div className="Container">
        <Lines />
        <Header />
        <Hero />
        <Services services={services} />
        <Clients />
        <CaseStudyGrid />
      </div>
      <Footer />
    </div>
  </Editable>

export default Home
