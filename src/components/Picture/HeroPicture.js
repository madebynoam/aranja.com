import React, { Component } from 'react'
import minBy from 'lodash/minBy'
import classNames from 'classnames'
import Img from './Img'
import Picture from './Picture'
import { withReveal } from '../../hoc/withReveal'

class HeroPicture extends Component {
  state = {
    isReady: false,
    isLoaded: false,
  }

  onLoad = () => {
    this.setState({ isLoaded: true })
  }

  onReady = () => {
    this.setState({ isReady: true })
  }

  render() {
    const { src, cover, isVisible, ...props } = this.props
    const { isLoaded, isReady } = this.state

    if (!Array.isArray(src)) {
      console.error('HeroPicture needs width/height metadata.')
      return <Picture src={src} {...props} />
    }
    
    const smallest = minBy(src, 'width')
    const main = src[0]
    const aspectRatio = main.width / main.height
    const style = !cover ? { paddingTop: `${100 / aspectRatio}%` } : null

    return (
      <div
        className={classNames('HeroPicture', isVisible && 'is-visible', isLoaded && 'is-loaded')}
        style={style}
      >
        <img
          className="HeroPicture-thumbnail"
          src={smallest.src}
          onLoad={this.onReady}
        />
        {isReady && <picture
          style={style}>
          <Img
            className="HeroPicture-image"
            src={src}
            role="presentation"
            onLoad={this.onLoad}
            {...props}
          />
        </picture>}
      </div>
    )
  }
}

export default withReveal(HeroPicture)
