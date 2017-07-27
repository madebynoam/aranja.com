import React from 'react'
import { Body2 } from '../../../typography'
import './styles.css'

const CSScreenshot = ({ img, caption }) =>
  <div className="CSScreenshot">
    <div className="CSScreenshot-image" style={{ backgroundImage: `url(${img})` }} />
    <Body2 top="small" bottom="small" className="CSScreenshot-caption">
      {caption}
    </Body2>
  </div>

export default CSScreenshot
