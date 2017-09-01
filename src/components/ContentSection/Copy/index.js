import React from 'react'
import classNames from 'classnames'
import { Body1, H2 } from '../../../typography'
import './styles.css'

const ContentSectionCopy = ({ heading, copy, lede, half }) => {

  return (
    <div
      className={classNames(
        lede && 'ContentSectionCopy-lede',
        half && 'ContentSectionCopy-half',
      )}
    >
      {heading &&
        <H2 bottom="small">
          {heading}
        </H2>}
      {copy &&
        <Body1>
          {copy}
        </Body1>}
    </div>
  )
}

export default ContentSectionCopy
