import React from 'react'
import { Body2 } from '../../../typography'
import './styles.css'

const Meta = ({ period }) =>
  <div className="Meta">
    <dl>
      <dt>
        <Body2>Period:</Body2>
      </dt>
      <dd>
        <Body2>
          {period}
        </Body2>
      </dd>
      <dt>
        <Body2>Team members:</Body2>
      </dt>
      <dd>
        <Body2>Eiríkur, Davíð, Ragnar</Body2>
      </dd>
    </dl>
  </div>

export default Meta
