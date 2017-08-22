import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Body2 } from '../../../typography'
import VisibilitySensor from 'react-visibility-sensor'
import classNames from 'classnames'
import './styles.css'

class Video extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      hasBeenSeen: false,
    }
  }

  onChange(isVisible) {
    this.setState({
      isVisible
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.isVisible && this.state.isVisible && !this.state.hasBeenSeen) {
      this.setState({
        hasBeenSeen: true
      })
    }

    if (this.state.isVisible) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }
  
  render() {
    const { video, description } = this.props
    const { isVisible, hasBeenSeen } = this.state

    return (
      <VisibilitySensor
        onChange={isVisible => this.onChange(isVisible)}
        active
        intervalDelay={100}
        minTopValue={400}
        partialVisibility
      >
        <div className="Video-wrapper">
          <video
            className={classNames('Video', isVisible && 'is-visible', hasBeenSeen && 'has-beenSeen')}
            loop
            src={video}
            ref={ref => { this.video = ref }}
          />
          <Body2 top="small" bottom="small" className="Video-description">
            {description}
          </Body2>
        </div>
      </VisibilitySensor>
    )
  }
}

Video.propTypes = {
  video: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Video
