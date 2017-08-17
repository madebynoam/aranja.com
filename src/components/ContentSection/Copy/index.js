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
      <Body1 bottom={lede ? 'large' : 'medium'}>
        {copy}
      </Body1>}
  </div>

export default ContentCopy
