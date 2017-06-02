import React from "react";
import BorderDecorator from "../BorderDecorator";
import Parallax from "../Parallax";

const SingleShowoff = ({ heading, copy, image }) => (
  <div className="Showoff">
    <div className="Showoff-wrap">
      <div className="Showoff-content">
        <h1 className="Showoff-heading">{heading}</h1>
        <p className="Showoff-copy">{copy}</p>
      </div>
    </div>
    <Parallax>
      <div className="Showoff-imageWrapper">
        <div
          className="Showoff-image"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      </div>
    </Parallax>
  </div>
);

export default SingleShowoff;
