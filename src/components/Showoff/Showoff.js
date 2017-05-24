import React from "react";
import BorderDecorator from "../BorderDecorator";

const SingleShowoff = ({ heading, copy, image }) => (
  <div className="Showoff">
    <div className="Showoff-wrap">
      <div className="Showoff-content">
        <h1 className="Showoff-heading">{heading}</h1>
        <p className="Showoff-copy">{copy}</p>
      </div>
    </div>
    <div className="Showoff-imageMask">
      <div
        className="Showoff-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
    </div>
  </div>
);

export default SingleShowoff;
