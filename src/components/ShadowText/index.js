import React from 'react'
import './styles.css'
class ShadowText extends React.Component {
  render() {
    return (
      <p className="ShadowText">
        {this.props.text}
      </p>
    )
  }
}

export default ShadowText
