import React from "react";
import Service from "../SingleService";
import Section from "../Section";
import image1 from "./image1.jpeg";
import image2 from "./image2.jpeg";
import image3 from "./image3.jpeg";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          title: "Application Development",
          image: image1,
        },
        {
          title: "Technical Consultancy",
          image: image2,
        },
        {
          title: "Performance Engineering",
          image: image3,
        },
      ],
    };
  }

  render() {
    const { services } = this.state;
    return (
      <Section>
        <div className="Services">
          {services.map((service, i) => (
            <Service
              key={`service_${i}`}
              title={service.title}
              image={service.image}
              number={`0${i + 1}`}
            />
          ))}
        </div>
      </Section>
    );
  }
}

export default Services;
