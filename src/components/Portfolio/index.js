import React from "react";
import "./styles.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.png";
import image6 from "./image6.jpg";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        { title: "Title1", image: image1, href: "/" },
        { title: "Title2", image: image2, href: "/" },
        { title: "Title3", image: image3, href: "/" },
        { title: "Title4", image: image4, href: "/" },
        { title: "Title5", image: image5, href: "/" },
        { title: "Title6", image: image6, href: "/" },
      ],
    };
  }
  render() {
    const { items } = this.state;
    return (
      <div className="Portfolio">
        {items.map(item => (
          <div
            key={item.title}
            className="Portfolio-item"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            {/* <h1 className="Portfolio-itemHeading">{item.title}</h1> */}
          </div>
        ))}
      </div>
    );
  }
}

export default Portfolio;
