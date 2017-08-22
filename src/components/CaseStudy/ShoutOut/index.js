import React from 'react'
import { Body1 } from '../../../typography'
import Link from '../../Link'
import './styles.css'

const ShoutOut = ({}) =>
  <div className="ShoutOut">
    <Body1 className="ShoutOut-text" top="medium">
      Want to work with us? <br /> <Link href="/todo">Get in touch</Link> and tell us about your project.
    </Body1>
  </div>

export default ShoutOut
