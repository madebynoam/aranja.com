import React from "react";
import image1 from "./image1.jpeg";
import image2 from "./image2.jpeg";
import SingleSeller from "./Seller";
import Section from "../Section";
import ShadowText from "../ShadowText";
import "./styles.css";

class Seller extends React.Component {
  constructor() {
    super();
    this.state = {
      content: [
        {
          title: "We create performant websites",
          copy: "Silky smooth performance, even on low-end devices, is what we’re all about. 60 frames per second or die trying.",
          image: image1,
        },
      ],
    };
  }

  render() {
    const { content } = this.state;
    console.log(content);

    return (
      <Section>
        <ShadowText text="Performance" />
        <div className="Sellers">
          {content.map((content, i) => (
            <SingleSeller key={i} title={content.title} copy={content.copy} image={content.image} />
          ))}
        </div>
      </Section>
    );
  }
}

export default Seller;
