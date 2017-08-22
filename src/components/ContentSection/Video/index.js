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
      isVisible: false
    }
  }

  onChange(isVisible) {
    this.setState({
      isVisible
    })
  }

  render() {
    const { video, description } = this.props
    const { isVisible } = this.state

    return (
      <VisibilitySensor
        onChange={isVisible => this.onChange(isVisible)}
        active={!isVisible}
        intervalDelay={250}
        minTopValue={400}
        partialVisibility
      >
        <div className="Video-wrapper">
          <video
            className={classNames('Video', isVisible && 'is-visible')}
            autoPlay
            loop
            src={video}
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
