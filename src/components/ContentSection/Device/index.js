import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Body1, H2 } from '../../../typography'
import Parallax from '../../Parallax'
import Device from './Device'
import './styles.scss'

class DeviceSection extends Component {
  render() {
    const { device, copy, heading, image } = this.props
    return (
      <div className="DeviceSection">
        <div
          className="DeviceSection-copy"
        >
          {heading &&
            <H2 bottom="small">
              {heading}
            </H2>}
          <Body1>
            {copy}
          </Body1>
        </div>
        <Parallax>
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
  image: PropTypes.string.isRequired,
}

export default DeviceSection
