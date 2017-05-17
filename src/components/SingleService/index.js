import React from "react";
import "./styles.css";
import { Motion, spring, presets } from "react-motion";
import Delay from "../Delay";

const Service = ({ title, image, number }) => (
  <div className="Service">
    <div className="Service-content">
      <p className="Service-number">{number}</p>
      <h1 className="Service-heading">{title}</h1>
      <a href="#" className="Service-link">See details</a>
    </div>
    <div className="Service-imageWrapper">
      <Delay initial={-110} value={0} period={500}>
        {delayed => (
          <Motion style={{ x: spring(delayed) }}>
            {value => (
              <div
                className="Service-image"
                style={{
                  backgroundImage: `url(${image})`,
                  transform: `translateX(${value.x}%)`,
                }}
              />
            )}
          </Motion>
        )}
      </Delay>
      <Motion defaultStyle={{ x: 50 }} style={{ x: spring(0, presets.stiff) }}>
        {value => (
          <div
            className="Service-imageBackground"
            style={{ transform: `translateX(${value.x}%)` }}
          />
        )}
      </Motion>
    </div>
  </div>
);

export default Service;
