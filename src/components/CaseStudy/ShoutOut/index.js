import React from 'react'
import { Body1 } from '../../../typography'
import './styles.css'

const ShoutOut = ({}) =>
  <div className="ShoutOut">
    <Body1 className="ShoutOut-text" top="medium">
      Want to work with us? <br /> <a className="Shoutout-link" href="/todo">Get in touch</a> and tell us about your project.
    </Body1>
  </div>

export default ShoutOut
