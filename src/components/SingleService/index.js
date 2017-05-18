import React from "react";
import "./styles.css";
import { Motion, StaggeredMotion, spring, presets } from "react-motion";
import Delay from "../Delay";
import VisibilitySensor from "react-visibility-sensor";

class Service extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      shouldStart: false,
    };
  }

  onChange(isVisible) {
    if (isVisible) {
      this.setState({
        isVisible,
      });
    }
  }

  render() {
    const { title, image, number } = this.props;
    const { isVisible } = this.state;
    return (
      <VisibilitySensor
        onChange={isVisible => this.onChange(isVisible)}
        active={isVisible ? false : true}
        intervalDelay={500}
        minTopValue={200}
        partialVisibility
      >
        <div className="Service">
          <Motion style={{ y: spring(isVisible ? 0 : -80, { stiffness: 110, damping: 20 }) }}>
            {value => (
              <div className="Service-content">
                <p className="Service-number">
                  <span className="u-mask">
                    <span
                      className="u-maskInner"
                      style={{
                        transform: `translateY(${value.y}px)`,
                      }}
                    >
                      {number}
                    </span>
                  </span>
                </p>
                <h1 className="Service-heading">
                  {title.split(" ").map((word, i) => {
                    return (
                      <span className="u-mask" key={i}>
                        <span
                          className="u-maskInner"
                          style={{
                            transform: `translateY(${value.y * (i + 1)}px)`,
                          }}
                        >
                          {word}
                        </span>
                      </span>
                    );
                  })}
                </h1>
                <a href="#" className="Service-link">
                  <span className="u-mask u-flex u-flexAlignCenter">
                    <span
                      className="u-lineDecorator"
                      style={{
                        transform: `translateX(${value.y * 5}px)`,
                      }}
                    />
                    <span
                      className="u-maskInner u-textIndent1"
                      style={{
                        transform: `translateY(${value.y * 5}px)`,
                      }}
                    >
                      See details
                    </span>
                  </span>
                </a>
              </div>
            )}
          </Motion>
          <Motion
            style={{
              x: spring(isVisible ? 0 : 110, { stiffness: 60, damping: 25 }),
              s: spring(isVisible ? 1 : 0, { stiffness: 160, damping: 25 }),
            }}
          >
            {value => (
              <div className="Service-imageWrapper">
                <Motion
                  style={{
                    x: spring(isVisible && value.x < 50 ? 0 : 120, {
                      stiffness: 100,
                      damping: 25,
                    }),
                    o: spring(isVisible ? 1 : 0, { stiffness: 50, damping: 15 }),
                  }}
                >
                  {value => (
                    <div
                      className="Service-image"
                      style={{
                        backgroundImage: `url(${image})`,
                        transform: `translateY(${value.x}%)`,
                        opacity: value.o,
                      }}
                    />
                  )}
                </Motion>
                <div
                  className="Service-imageBackground"
                  style={{
                    transform: `translateX(${value.x}%) scaleX(${value.s})`,
                  }}
                />
              </div>
            )}
          </Motion>
        </div>
      </VisibilitySensor>
    );
  }
}

export default Service;
