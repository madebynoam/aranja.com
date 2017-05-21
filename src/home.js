import React from 'react';
import Intro from './components/Intro';
import Services from './components/Services';
import Recent from './components/Recent';
import Lines from './components/Lines';
import Menu from './components/Menu';
import Portfolio from './components/Portfolio';
import Showoff from './components/Showoff';

class Home extends React.Component {
  render() {
    return (
      <div className="Page Home">
        <Lines />
        <div className="Container">
          <Menu />
          <Intro />
          <Services />
          <Showoff />
          <Portfolio />
        </div>
      </div>
    );
  }
}

export default Home;
