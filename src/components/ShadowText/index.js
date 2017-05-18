import React from "react";
import "./styles.css";

class ShadowText extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { text } = this.props;
    return <p className="ShadowText">{text}</p>;
  }
}

export default ShadowText;
