import React from 'react'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Lines from '../components/Lines'
import Menu from '../components/Menu'
import Portfolio from '../components/Portfolio'
import Showoff from '../components/Showoff'
import Footer from '../components/Footer'
import Clients from '../components/Clients'
import Frame from '../components/Frame'
import { Editable } from 'tux'

class Home extends React.Component {
  render() {
    const { content, services, showOffs } = this.props
    return (
      <Editable model={content}>
        <div className="Home">
          <Frame />
          <div className="Container">
            <Lines />
            <Menu />
            <Intro />
            <Services services={services} />
            <Showoff showOffs={showOffs} />
            <Clients />
            <Portfolio />
          </div>
          <Footer />
        </div>
      </Editable>
    )
  }
}

export default Home
