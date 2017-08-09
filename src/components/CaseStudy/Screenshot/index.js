import React, { Component } from 'react'
import { Body2 } from '../../../typography'
import VisibilitySensor from 'react-visibility-sensor'
import classNames from 'classnames'
import './styles.css'

class Screenshot extends Component {
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
          <div className={classNames('Screenshot', isVisible && 'is-visible')}>
            <div className="Screenshot-image" style={{ backgroundImage: `url(${img})` }} />
          </div>
          <Body2 top="small" bottom="small" className="Screenshot-caption">
            {caption}
          </Body2>
        </div>
      </VisibilitySensor>
    )
  }
}

export default Screenshot
