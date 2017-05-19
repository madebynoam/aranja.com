import React from "react";
import "./styles.css";
import { Motion, StaggeredMotion, spring, presets } from "react-motion";
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
        isVisible: true,
      });
    }
  }

  render() {
    const { title, copy, image } = this.props;
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
          <Motion
            style={{
              y: spring(isVisible ? 0 : -80, { stiffness: 110, damping: 20 }),
            }}
          >
            {value => (
              <div className="Service-contentWrap">
                <div className="Service-content">
                  <h1 className="Service-heading">
                    {title.split(" ").map((word, i) => {
                      return (
                        <span className="u-mask" key={i}>
                          <span
                            className="u-maskInner"
                            style={{
                              transform: `translateY(${value.y * (i + 1.5)}px)`,
                            }}
                          >
                            {word}
                          </span>
                        </span>
                      );
                    })}
                  </h1>
                  <p className="Service-copy">{copy}</p>
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
              </div>
            )}
          </Motion>
          <Motion
            style={{
              y: spring(isVisible ? 0 : 10, { stiffness: 100, damping: 40 }),
            }}
          >
            {value => (
              <div
                className="Service-imageWrapper"
                style={{
                  transform: `translateY(${value.y}%)`,
                }}
              >
                <Motion
                  style={{
                    x: spring(isVisible ? 0 : 120, {
                      stiffness: 100,
                      damping: 25,
                    }),
                  }}
                >
                  {value => (
                    <div
                      className="Service-image"
                      style={{
                        backgroundImage: `url(${image})`,
                        transform: `translateY(${value.x}%)`,
                      }}
                    />
                  )}
                </Motion>
                <Motion
                  style={{
                    x: spring(isVisible ? 0 : -100, {
                      stiffness: 160,
                      damping: 25,
                    }),
                  }}
                >
                  {value => (
                    <div
                      className="Service-imageBackground"
                      style={{
                        transform: `translateX(${value.x}%) `,
                      }}
                    />
                  )}
                </Motion>
              </div>
            )}
          </Motion>
        </div>
      </VisibilitySensor>
    );
  }
}

export default Service;
