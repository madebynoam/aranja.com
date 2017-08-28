import React from 'react'
import classNames from 'classnames'
import { Body1, H1 } from '../../../typography'
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
        <H1 top="small" bottom="small">
          {heading}
        </H1>}
      {copy &&
        <Body1 bottom={lede ? 'large' : 'medium'}>
          {copy}
        </Body1>}
    </div>
  )
}

export default ContentSectionCopy
