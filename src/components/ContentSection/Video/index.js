import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Body2 } from '../../../typography'
import classNames from 'classnames'
import { withReveal } from '../../../hoc/withReveal'
import './styles.scss'

class Video extends Component {
  constructor(props) {
    super(props)
    this.handlePlayback = this.handlePlayback.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isVisible && this.props.isVisible) {
      this.handlePlayback(true)
    }
    if (prevProps.isVisible && !this.props.isVisible) {
      this.handlePlayback(false)
    }
  }

  handlePlayback(shouldPlay) {
    shouldPlay ? this.video.play() : this.video.pause()
  }

  render() {
    const { video, fallbackVideo, description } = this.props
    const { isVisible } = this.props

    return (
      <div className={classNames('Video-wrapper', isVisible && 'is-visible')}>
        <video
          autoplay
          playsInline
          loop
          key={description}
          className="Video"
          ref={ref => {
            this.video = ref
          }}
        >
          <source src={video} type="video/webm" />
          {fallbackVideo && <source src={fallbackVideo} type="video/mp4" />}
        </video>
        <Body2 top="small" bottom="small" className="Video-description">
          {description}
        </Body2>
      </div>
    )
  }
}

Video.propTypes = {
  video: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default withReveal(Video, { triggerOnce: false, threshold: 0.3 })
