import React from 'react';
import image1 from './image1.jpeg';
import image2 from './image2.jpeg';
import SingleShowoff from './Showoff';
import Section from '../Section';
import ShadowText from '../ShadowText';
import './styles.css';

class Showoff extends React.Component {
  constructor() {
    super();
    this.state = {
      content: [
        {
          heading: 'We create performant websites',
          copy: 'Silky smooth performance, even on low-end devices, is what we’re all about. 60 frames per second or die trying.',
          image: image1,
        },
      ],
    };
  }

  render() {
    const {content} = this.state;
    console.log(content);

    return (
      <Section>
        <ShadowText text="Performance" />
        <div className="Showoffs">
          {content.map((content, i) => (
            <SingleShowoff
              key={i}
              heading={content.heading}
              copy={content.copy}
              image={content.image}
            />
          ))}
        </div>
      </Section>
    );
  }
}

export default Showoff;
