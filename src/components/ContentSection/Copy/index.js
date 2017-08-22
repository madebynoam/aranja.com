import React from 'react'
import classNames from 'classnames'
import { Body1, H1, H2 } from '../../../typography'
import './styles.css'

const ContentSectionCopy = ({ heading, copy, lede, half }) => {
  const HLevel = lede ? H1 : H2

  return (
    <div
      className={classNames(
        lede && 'ContentSectionCopy-lede',
        half && 'ContentSectionCopy-half',
      )}
    >
      {heading &&
        <HLevel top="small" bottom="small">
          {heading}
        </HLevel>}
      {copy &&
        <Body1 bottom={lede ? 'large' : 'medium'}>
          {copy}
        </Body1>}
    </div>
  )
}

export default ContentSectionCopy
