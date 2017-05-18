import React from "react";
import "./styles.css";
const BorderDecorator = ({ sides = 4 }) => (
  <div className="BorderDecorator">
    {Array.from({ length: sides }).map((_, i) => <span key={i} className="BorderDecorator-line" />)}
  </div>
);

export default BorderDecorator;
