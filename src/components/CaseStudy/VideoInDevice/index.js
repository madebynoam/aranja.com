import React, { Component } from 'react'
import { Body1, H2 } from '../../../typography'
import './styles.css'

class VideoInDevice extends Component {
  render() {
    const { device, copy, heading, video } = this.props
    return (
      <div className="VideoInDevice">
        <div className="VideoInDevice-copy">
          {heading && <H2 bottom="small">{heading}</H2>}
          <Body1>{copy}</Body1>
        </div>
        <div className="VideoInDevice-device">
          <video className="VideoInDevice-video" autoPlay loop src={video.asset.file.url}></video>
          <div className={`VideoInDevice-deviceFrame ${device}`}></div>
        </div>
      </div>
    )
  }
}

export default VideoInDevice