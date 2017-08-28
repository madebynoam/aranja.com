import React from 'react'

const transformSrcSet = images =>
  images
    .map(({ src, width, density }) => {
      if (width && density) {
        throw new Error(
          'Img Component allows either `width` or `density` on images, but not both.'
        )
      }

      const descriptor = width ? ` ${width}w` : density ? ` ${density}x` : ''

      return `${src}${descriptor}`
    })
    .join(', ')

const Img = ({ src, alt, ...props }) =>
  (Array.isArray(src)
    ? <img
        src={src[0].src}
        srcSet={transformSrcSet(src)}
        alt={alt}
        {...props}
      />
    : <img src={src} alt={alt} {...props} />)

export default Img