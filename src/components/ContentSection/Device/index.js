import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Body1, H1 } from '../../../typography'
import Parallax from '../../Parallax'
import Device from './Device'
import './styles.css'

class DeviceSection extends Component {
  render() {
    const { device, copy, heading, image } = this.props
    return (
      <div className="DeviceSection">
        <div
          className="DeviceSection-copy"
        >
          {heading &&
            <H1 bottom="small">
              {heading}
            </H1>}
          <Body1>
            {copy}
          </Body1>
        </div>
        <Parallax clamp>
          <div className="DeviceSection-device">
            <Device device={device} image={image} />
          </div>
        </Parallax>
      </div>
    )
  }
}

DeviceSection.propTypes = {
  device: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  image: PropTypes.shape({

  }),
}

export default DeviceSection
