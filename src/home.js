import React from "react";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Recent from "./components/Recent";
import Lines from "./components/Lines";
import Menu from "./components/Menu";
import Portfolio from "./components/Portfolio";
import Showoff from "./components/Showoff";
import Footer from "./components/Footer";
import Clients from "./components/Clients";

class Home extends React.Component {
  render() {
    return (
      <div className="Page Home">
        <div className="Container">
          <Lines />
          <Menu />
          <Intro />
          <Services />
          <Showoff />
          <Clients />
          <Portfolio />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
