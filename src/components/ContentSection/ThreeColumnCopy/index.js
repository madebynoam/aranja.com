import React from 'react'
import { Body1, Body2, H2, H3 } from '../../../typography'
import './styles.css'

const ContentThreeColumnCopy = ({
  heading,
  column1Subheading,
  column1Copy,
  column2Subheading,
  column2Copy,
  column3Subheading,
  column3Copy
}) =>
  <div className="ContentSection-threeCols">
      <div className="ContentSection-column">
        <H3 top="small" bottom="small">
          {column1Subheading}
        </H3>
        <Body2>
          {column1Copy}
        </Body2>
      </div>
      <div className="ContentSection-column">
        <H3 top="small" bottom="small">
          {column2Subheading}
        </H3>
        <Body2>
          {column2Copy}
        </Body2>
      </div>
      <div className="ContentSection-column">
        <H3 top="small" bottom="small">
          {column3Subheading}
        </H3>
        <Body2>
          {column3Copy}
        </Body2>
      </div>
  </div>

export default ContentThreeColumnCopy
