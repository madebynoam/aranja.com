import React from "react";
import "./styles.css";

const Intro = ({}) => (
  <div className="Intro-wrapper">
    <div className="Intro">
      <div className="Intro-content">
        <div className="Intro-decoratorBefore" />
        <h1 className="Intro-heading">
          <span className="u-bold">Pushing</span>
          {" "}
          the standard
          {" "}
          <br />
          {" "}
          forward with
          {" "}
          <span className="u-bold">Kolibri</span>
        </h1>
        <blockquote className="Intro-quote">
          “We chose Aranja for the job because we know <br />
          they strive for perfection and that’s exactly <br />
          what we wanted - perfection.” — Olav CEO of Kolibri
        </blockquote>
        <div className="Intro-decoratorAfter" />
      </div>
    </div>
    <div className="DownArrow" />
  </div>
);

export default Intro;
