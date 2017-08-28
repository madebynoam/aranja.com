import React, { Component } from 'react'
import minBy from 'lodash/minBy'
import classNames from 'classnames'
import Img from './Img'
import Picture from './Picture'

class HeroPicture extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMounted: false,
      isLoaded: false,
    }
    this.onLoad = this.onLoad.bind(this)
  }

  componentDidMount() {
    this.setState({ isMounted: true })
  }

  onLoad() {
    this.setState({ isLoaded: true })
  }

  render() {
    const { src, ...props } = this.props
    const { isMounted, isLoaded } = this.state

    if (!Array.isArray(src)) {
      console.error('HeroPicture needs width/height metadata.')
      return <Picture src={src} {...props} />
    }

    const smallest = minBy(src, 'width')
    const main = src[0]
    const aspectRatio = main.width / main.height
    return (
      <picture
        className={classNames('HeroPicture', isLoaded && 'is-loaded')}
        style={{ paddingTop: `${100 / aspectRatio}%` }}
      >
        {isMounted &&
          <Img
            className="HeroPicture-image"
            src={src}
            role="presentation"
            onLoad={this.onLoad}
            {...props}
          />}
        <img
          className="HeroPicture-thumbnail"
          src={smallest.src}
          role="presentation"
        />
      </picture>
    )
  }
}

export default HeroPicture
