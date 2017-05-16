import React from 'react';
import Intro from './components/Intro';
import Service from './components/Service';
import Lines from './components/Lines';
import Menu from './components/Menu';

const Home = () => {
  return (
    <div className="Page Home">
      <Lines />
      <div className="Container">
        <Menu />
        <Intro />
        <Service />
      </div>
    </div>
  );
};

export default Home;
