import React, { Component } from 'react'
import { Body1 } from '../../../typography'
import './styles.css'

class VideoInDevice extends Component {
  render() {
    const { device, copy, video } = this.props
    return (
      <div className="VideoInDevice">
        <div className="VideoInDevice-copy">
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