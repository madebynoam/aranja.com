import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Body2 } from '../../../typography'
import VisibilitySensor from 'react-visibility-sensor'
import classNames from 'classnames'
import './styles.css'

class Image extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
    }
  }

  onChange(isVisible) {
    this.setState({
      isVisible,
    })
  }

  render() {
    const { img, caption } = this.props
    const { isVisible } = this.state

    return (
      <VisibilitySensor
        onChange={isVisible => this.onChange(isVisible)}
        active={!isVisible}
        intervalDelay={250}
        minTopValue={400}
        partialVisibility
      >
        <div>
          <div className={classNames('Image', isVisible && 'is-visible')}>
            <div className="Image-image" style={{ backgroundImage: `url(${img})` }} />
          </div>
          <Body2 top="small" bottom="small" className="Image-caption">
            {caption}
          </Body2>
        </div>
      </VisibilitySensor>
    )
  }
}

Image.propTypes = {
  img: PropTypes.string,
  caption: PropTypes.string,
}

export default Image
