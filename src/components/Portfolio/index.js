import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Motion, StaggeredMotion, spring, presets } from "react-motion";
import classnames from "classnames";

import "./styles.css";

import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.png";
import image6 from "./image6.jpg";

let defaultItems = [
  { title: "Title1", image: undefined, href: "/", year: "2017" },
  { title: "Title2", image: image2, href: "/", year: undefined },
  { title: "Title3", image: image3, href: "/", year: undefined },
  { title: "Title4", image: image4, href: "/", year: undefined },
  { title: "Title5", image: image5, href: "/", year: undefined },
  { title: "Title6", image: image6, href: "/", year: undefined },
];

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isHovered: false,
    };
  }

  onChange(isVisible) {
    this.setState({
      isVisible,
    });
  }

  render() {
    const { isVisible } = this.state;
    const { items = defaultItems } = this.props;
    return (
      <VisibilitySensor
        onChange={isVisible => this.onChange(isVisible)}
        active={!isVisible}
        intervalDelay={500}
        minTopValue={200}
        partialVisibility
      >
        <StaggeredMotion
          defaultStyles={items.map(() => ({
            x: 10,
            o: 0,
          }))}
          styles={prevInterpolatedStyles =>
            prevInterpolatedStyles.map((_, i) => {
              return i === 0
                ? {
                    x: spring(isVisible ? 0 : 10, { stiffness: 150, damping: 20 }),
                    o: spring(isVisible ? 1 : 0, { stiffness: 140, damping: 30 }),
                  }
                : {
                    x: spring(prevInterpolatedStyles[i - 1].x),
                    o: spring(prevInterpolatedStyles[i - 1].o),
                  };
            })}
        >
          {interpolatingStyles => (
            <div
              className={classnames(
                "Portfolio",
                isVisible && interpolatingStyles[items.length - 1].x === 0 && "is-visible",
              )}
            >
              {items.map((item, index) => (
                <div key={item.title} className="Portfolio-item">
                  {item.year &&
                    <p
                      className="Portfolio-itemText"
                      style={{
                        transform: `translateY(${interpolatingStyles[index].x * 5}%)`,
                        opacity: interpolatingStyles[index].o,
                      }}
                    >
                      {item.year}
                    </p>}
                  <div
                    className="Portfolio-image"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      transform: `translateX(${interpolatingStyles[index].x}%) scale(1.05)`,
                      opacity: interpolatingStyles[index].o,
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </StaggeredMotion>
      </VisibilitySensor>
    );
  }
}

export default Portfolio;
