import React from 'react'
import classNames from 'classnames'
import { Body1, H1 } from '../../../typography'
import CaseStudyButton from '../../CaseStudy/Button'
import ShoutOut from '../../CaseStudy/ShoutOut'
import './styles.css'

const ContentSectionCopy = ({ heading, copy, lede, closing }) =>
  <div className={classNames(lede && 'ContentSectionCopy-lede', closing && 'ContentSectionCopy-half')}>
    {heading &&
      <H1 top="small" bottom="small">
        {heading}
      </H1>}
    {copy &&
      <Body1 bottom={lede ? 'large' : 'medium'}>
        {copy}
      </Body1>}
      {closing && [
        <CaseStudyButton>Visit project</CaseStudyButton>,
        <ShoutOut />
      ]
      }
  </div>

export default ContentSectionCopy
