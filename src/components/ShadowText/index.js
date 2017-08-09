import React, { Component } from 'react'
import './styles.css'
class ShadowText extends Component {
  render() {
    return (
      <p className="ShadowText">
        {this.props.text}
      </p>
    )
  }
}

export default ShadowText
