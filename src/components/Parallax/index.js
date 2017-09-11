import React, { Component } from 'react'
import PropTypes from 'prop-types'
import service, { offsetTop } from './ParallaxService'

class Parallax extends Component {
  componentDidMount() {
    this.cache()
    service.addItem(this)
  }
  componentDidUpdate() {
    console.log('update')
    if (this.context.transitionState === 'entered') {
      this.cache()
    }
  }
  componentWillUnmount() {
    service.removeItem(this)
  }

  translate() {
    const { clamp, variableName = 'parallax' } = this.props
    const { viewHeight, scrollPosition } = service.data
    const viewBottom = scrollPosition + viewHeight
    const ratio = (this.top - viewBottom) / (scrollPosition - viewBottom)
    const appliedRatio = clamp ? Math.min(1, Math.max(0, ratio)) : ratio

    this.element_.style.setProperty(`--${variableName}`, appliedRatio)
  }

  cache() {
    this.top = offsetTop(this.element_)
    this.translate()
  }

  render() {
    return React.cloneElement(this.props.children, {
      ref: element => {
        this.element_ = element
      },
    })
  }
}

Parallax.contextTypes = {
  transitionState: PropTypes.string,
}

export default Parallax
