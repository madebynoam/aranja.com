import React from 'react'
import { Body1 } from '../../../typography'
import Link from '../../Link'
import './styles.scss'

const ShoutOut = ({}) =>
  <div className="ShoutOut">
    <Body1 className="ShoutOut-text">
      Want to work with us? <br /> <Link href="mailto:hello@aranja.com">Get in touch</Link> and tell us about your project.
    </Body1>
  </div>

export default ShoutOut
