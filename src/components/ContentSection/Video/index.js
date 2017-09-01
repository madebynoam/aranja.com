import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Body2 } from '../../../typography'
import classNames from 'classnames'
import { withReveal } from '../../../hoc/withReveal'
import './styles.css'

class Video extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.isVisible) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }

  render() {
    const { video, description } = this.props
    const { isVisible, hasBeenSeen } = this.props

    return (
      <div className="Video-wrapper">
        <video
         key={description}
          className={classNames(
            'Video',
            isVisible && 'is-visible',
            hasBeenSeen && 'has-beenSeen'
          )}
          loop
          src={video}
          ref={ref => {
            this.video = ref
          }}
        />
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

export default withReveal(Video)
