import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import {Motion, StaggeredMotion, spring, presets} from 'react-motion';
import classnames from 'classnames';

import './styles.css';

import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.png';
import image6 from './image6.jpg';

let defaultItems = [
  {title: undefined, image: undefined, href: '/', year: '2017'},
  {title: 'Amazing', image: image2, href: '/', year: undefined},
  {title: 'Transitions', image: image3, href: '/', year: undefined},
  {title: 'So cool', image: image4, href: '/', year: undefined},
  {title: 'Swizz swooz', image: image5, href: '/', year: undefined},
  {title: 'Agree', image: image6, href: '/', year: undefined},
];

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
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
    const {isVisible} = this.state;
    const {items = defaultItems} = this.props;
    return (
      <VisibilitySensor
        onChange={isVisible => this.onChange(isVisible)}
        active={!isVisible}
        intervalDelay={500}
        minTopValue={500}
        partialVisibility
      >
        <StaggeredMotion
          defaultStyles={items.map(() => ({
            y: 100,
            o: 0,
            s1: 0.75,
            s2: 1.25,
          }))}
          styles={prevInterpolatedStyles =>
            prevInterpolatedStyles.map((_, i) => {
              return i === 0
                ? {
                    y: spring(isVisible ? 0 : 100, {
                      stiffness: 600,
                      damping: 50,
                    }),
                    o: spring(isVisible ? 1 : 0, {stiffness: 100, damping: 35}),
                    s1: spring(isVisible ? 1 : 0.75, {
                      stiffness: 500,
                      damping: 100,
                    }),
                    s2: spring(isVisible ? 1 : 1.25, {
                      stiffness: 500,
                      damping: 100,
                    }),
                  }
                : {
                    y: spring(prevInterpolatedStyles[i - 1].y),
                    o: spring(prevInterpolatedStyles[i - 1].o),
                    s1: spring(prevInterpolatedStyles[i - 1].s1),
                    s2: spring(prevInterpolatedStyles[i - 1].s2),
                  };
            })}
        >
          {interpolatingStyles => (
            <div
              className={classnames(
                'Portfolio',
                isVisible &&
                  interpolatingStyles[items.length - 1].y === 0 &&
                  'is-visible',
              )}
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className={classnames(
                    'Portfolio-itemWrap',
                    item.title && 'has-content',
                  )}
                  style={{
                    transform: `translateY(${interpolatingStyles[index].y}px)`,
                    opacity: interpolatingStyles[index].o,
                  }}
                >
                  {item.title &&
                    <p className="Portfolio-caption">
                      {item.title}
                    </p>}
                  <div
                    className="Portfolio-item"
                    style={{
                      transform: `scale(${interpolatingStyles[index].s1})`,
                    }}
                  >
                    {item.year &&
                      <p className="Portfolio-itemText">
                        {item.year}
                      </p>}
                    <div
                      className="Portfolio-image"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        transform: `scale(${interpolatingStyles[index].s2})`,
                        opacity: interpolatingStyles[index].o,
                      }}
                    />
                  </div>
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
