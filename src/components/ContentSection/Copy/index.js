import React from 'react'
import classNames from 'classnames'
import { Body1, H2 } from '../../../typography'
import './styles.css'

const ContentSectionCopy = ({ heading, copy, lede, style }) => {
  return (
    <div
      className={classNames(
        'ContentSectionCopy',
        lede && 'ContentSectionCopy--lede',
        style && `ContentSectionCopy--${style}`
      )}
    >
      {heading && <H2 bottom="small">{heading}</H2>}
      {copy && <Body1 bottom="large">{copy}</Body1>}
    </div>
  )
}

export default ContentSectionCopy
