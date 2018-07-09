import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import Observer, {
  observe,
  elementHeight,
  elementWidth,
} from '../react-observe'
import getImageUrl from './getImageUrl'

injectGlobal`
  .js .jsBG {
    background-image: none !important;
  }
`

const backgroundHandler = (file, width, height) =>
  getImageUrl(file, {
    width,
    height,
  })
const background = file =>
  observe(file, elementWidth(), elementHeight(), backgroundHandler)

const shouldLoad = true
// TODO: Lazy load when close to viewport.
// This needs to be smarter for fast scrollers and 3G. E.g. a lower resolution image until element comes into view,
// then switch to higher resolution image. This might be tricky to implement "smoothly".
// const shouldLoad = observe(
//   elementY(-2),
//   viewportY(1),
//   lastValue(),
//   (elementRunway, viewportBottom, didLoad) =>
//     didLoad || elementRunway < viewportBottom
// )

const lazyBackground = file =>
  observe(
    background(file),
    shouldLoad,
    (background, shouldLoad) => shouldLoad && background
  )


/* 
SmartImage takes in a contentful file object
and returns a function with the correct optimized url for the asset
based on the viewport bounds.
https://www.contentful.com/developers/docs/references/images-api/
https://www.contentful.com/developers/docs/references/images-api/#/reference/resizing-&-cropping/specify-width-&-height/retrieve-an-image/console

Example usage:
<SmartImage image={item.fields.heroImage}>
  {imageUrl => (
    <div
      style={{backgroundImage: `url(${imageUrl})`}}
    />
  )}
</SmartImage>
*/

export class SmartImage extends Component {
  renderChildren = imageUrl => {
    const { image, styles, defaultWidth = 1280, children } = this.props
    const hasImage = !!imageUrl
    imageUrl = imageUrl || getImageUrl(image, { width: defaultWidth })

    let props = imageUrl
    if (styles) {
      props = {
        style: { backgroundImage: `url(${imageUrl})` },
        className: !hasImage ? 'jsBG' : undefined,
      }
    }

    return children(props)
  }

  render() {
    const { image } = this.props
    return (
      <Observer value={lazyBackground(image)}>{this.renderChildren}</Observer>
    )
  }
}

export default SmartImage
