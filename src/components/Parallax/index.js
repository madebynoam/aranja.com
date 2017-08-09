import React, { Component } from 'react'
import service, { offsetTop } from './ParallaxService'

class Parallax extends Component {
  componentDidMount() {
    service.addItem(this)
    this.cache()
  }

  translate() {
    const { viewHeight, scrollPosition } = service.data
    const viewBottom = scrollPosition + viewHeight
    const ratio = (this.top - viewBottom) / (scrollPosition - viewBottom)

    this.element_.style.setProperty('--parallax', ratio)
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

export default Parallax
