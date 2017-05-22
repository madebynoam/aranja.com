import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Motion, StaggeredMotion, spring, presets } from "react-motion";
import "./styles.css";
import androidLogo from "./android.svg";
import facebookLogo from "./facebook.svg";
import githubLogo from "./github.svg";
import googleLogo from "./google.svg";
import nestLogo from "./nest.svg";
import kolibriLogo from "./kolibri.svg";
import lsbLogo from "./lsb.svg";
import upperquadLogo from "./uq.svg";

const clients = [
  {
    name: "Facebook",
    logo: facebookLogo,
  },
  {
    name: "Github",
    logo: githubLogo,
  },
  {
    name: "Google",
    logo: googleLogo,
  },
  {
    name: "Upperquad",
    logo: upperquadLogo,
  },
  {
    name: "Android",
    logo: androidLogo,
  },
  {
    name: "Kolibri",
    logo: kolibriLogo,
  },
];

class Clients extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
  }

  onChange(isVisible) {
    this.setState({
      isVisible,
    });
  }

  render() {
    const { isVisible } = this.state;
    return (
      <VisibilitySensor
        onChange={isVisible => this.onChange(isVisible)}
        active={!isVisible}
        intervalDelay={250}
        minTopValue={300}
        partialVisibility
      >
        <StaggeredMotion
          defaultStyles={clients.map(() => ({
            o: 0,
            f: 0,
            y: -50,
          }))}
          styles={prevInterpolatedStyles =>
            prevInterpolatedStyles.map((_, i) => {
              return i === 0
                ? {
                    o: spring(isVisible ? 1 : 0, { stiffness: 100, damping: 35 }),
                    f: spring(isVisible ? 1 : 0, {
                      stiffness: 200,
                      damping: 50,
                    }),
                    y: spring(isVisible ? 0 : -100),
                  }
                : {
                    o: spring(prevInterpolatedStyles[i - 1].o),
                    f: spring(prevInterpolatedStyles[i - 1].f),
                    y: spring(prevInterpolatedStyles[i - 1].y),
                  };
            })}
        >
          {interpolatingStyles => (
            <div className="Clients">
              <h1 className="Clients-heading">Selected clients</h1>
              <h2 className="Clients-subheading">
                We've had the pleasure of working with <br /> some of tech's leading companies
              </h2>
              <ul className="Clients-list">
                {clients.map((client, index) => (
                  <li
                    className="Clients-item"
                    key={index}
                    style={{
                      filter: `saturate(${interpolatingStyles[index].f})`,
                      opacity: interpolatingStyles[index].o,
                      transform: `translateY(${interpolatingStyles[index].y}px)`,
                    }}
                  >
                    <img className="Clients-image" src={client.logo} alt={client.name} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </StaggeredMotion>
      </VisibilitySensor>
    );
  }
}

export default Clients;
