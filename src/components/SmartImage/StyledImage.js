import React from 'react'
import SmartImage from './SmartImage'

export const StyledImage = ({ image, className, children, style }) => (
  <SmartImage image={image} styles>
    {({ className: imageClassName, style: imageStyle }) => (
      <div
        style={{ ...imageStyle, ...style }}
        className={`${imageClassName} ${className || ''}`}
      >
        {children}
      </div>
    )}
  </SmartImage>
)

export default StyledImage
