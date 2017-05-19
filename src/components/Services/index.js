import React from "react";
import Service from "./Service";
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
          copy: "We engineer beautiful web apps and performant games. Our speciality is working with cutting edge technology and producing high-end deliverables.",
          image: image1,
        },
        {
          title: "Technical Consultancy",
          copy: "If you want to level up your whole organization, we’ll lead on-site training tailored to your needs",
          image: image2,
        },
        // {
        //   title: "Performance Engineering",
        //   copy: "If you want to level up your whole organization, we’ll lead on-site training tailored to your needs",
        //   image: image3,
        // },
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
              copy={service.copy}
            />
          ))}
        </div>
      </Section>
    );
  }
}

export default Services;
