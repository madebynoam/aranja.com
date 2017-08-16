import React from 'react'
import classNames from 'classnames'
import { Body1, Body2, H2, H3 } from '../../../typography'
import './styles.css'

const ContentCopy = ({ heading, copy, lede }) =>
  <div className={classNames(lede && 'ContentCopy-lede')}>
    {heading &&
      <H2 top="small" bottom="small">
        {heading}
      </H2>}
    {copy &&
      <span>
        {lede
          ? <H3 lineHeight bottom="medium">
              {copy}
            </H3>
          : <Body1 bottom="medium">
              {copy}
            </Body1>}
      </span>}
  </div>

export default ContentCopy
