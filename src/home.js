import React from "react";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Recent from "./components/Recent";
import Lines from "./components/Lines";
import Menu from "./components/Menu";

const Home = () => {
  return (
    <div className="Page Home">
      <Lines />
      <div className="Container">
        <Menu />
        <Intro />
        <Services />
      </div>
    </div>
  );
};

export default Home;
