import React from "react";
import "./styles.css";
import { Motion, StaggeredMotion, spring, presets } from "react-motion";
import { TweenMax, Power2, TimelineLite } from "gsap";
import VisibilitySensor from "react-visibility-sensor";

class Service extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      shouldStart: false,
    };
  }

  componentDidMount() {
    TweenMax.set(this.imageWrapper, { y: 0 });
  }

  onChange(isVisible) {
    if (isVisible) {
      this.setState({
        isVisible: true,
      });

      TweenMax.to(this.imageWrapper, 2, { y: 0 });
    }
  }

  componentWillUnmount() {}

  render() {
    const { heading, copy, image } = this.props;
    const { isVisible } = this.state;
    return (
      <VisibilitySensor
        onChange={isVisible => this.onChange(isVisible)}
        active={!isVisible}
        intervalDelay={250}
        minTopValue={300}
        partialVisibility
      >
        <div className="Service">
          <div className="Service-contentWrap">
            <div className="Service-content">
              <h1 className="Service-heading">
                {heading.split(" ").map((word, i) => {
                  return (
                    <span className="u-mask" key={i}>
                      <span className="u-maskInner">
                        {word}
                      </span>
                    </span>
                  );
                })}
              </h1>
              <p className="Service-copy">
                <span className="u-mask">
                  <span className="u-maskInner">
                    {copy}
                  </span>
                </span>
              </p>
              <a href="#" className="Service-link">
                <span className="u-mask u-flex u-flexAlignCenter">
                  <span className="u-lineDecorator" />
                  <span className="u-maskInner u-textIndent1">
                    See details
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div
            className="Service-imageWrapper"
            ref={imageWrapper => {
              this.imageWrapper = imageWrapper;
            }}
          >
            <div
              className="Service-image"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
            <div className="Service-imageBackground" />
          </div>
        </div>
      </VisibilitySensor>
    );
  }
}

export default Service;
