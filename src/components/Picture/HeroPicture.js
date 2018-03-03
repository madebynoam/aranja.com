import React, { Component } from 'react'
import minBy from 'lodash/minBy'
import classNames from 'classnames'
import Img from './Img'
import Picture from './Picture'
import { withReveal } from '../../hoc/withReveal'

class HeroPicture extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMounted: false,
      isLoaded: false,
    }
  }

  onLoad = () => {
    this.setState({ isLoaded: true })
  }

  render() {
    const { src, cover, parallax, isVisible, ...props } = this.props
    const { isLoaded } = this.state

    if (!Array.isArray(src)) {
      console.error('HeroPicture needs width/height metadata.')
      return <Picture src={src} {...props} />
    }

    const smallest = minBy(src, 'width')
    const main = src[0]
    const aspectRatio = main.width / main.height
    const style = !cover ? { paddingTop: `${100 / aspectRatio}%` } : null

    return (
      <picture
        className={classNames('HeroPicture', isVisible && 'is-visible', isLoaded && 'is-loaded', parallax && 'withParallax')}
        style={style}
      >
        <Img
          className="HeroPicture-image"
          src={src}
          role="presentation"
          onLoad={this.onLoad}
          {...props}
        />
        <img
          className="HeroPicture-thumbnail"
          src={smallest.src}
          role="presentation"
          {...props}
        />
      </picture>
    )
  }
}

export default withReveal(HeroPicture)
