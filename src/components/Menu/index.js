import React from 'react'
import './styles.css'

const Menu = ({}) =>
  <nav className="Menu">
    <a href="/" className="Menu-logo">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/138822/aranja-logo.svg" alt="" />
    </a>
    <ul>
      <li className="Menu-item">
        <a href="/">Home</a>
      </li>
      <li className="Menu-item">
        <a href="/team">The team</a>
      </li>
      <li className="Menu-item">
        <a href="/casestudies">Case studies</a>
      </li>
      <li className="Menu-item">
        <a href="/">Get in touch</a>
      </li>
    </ul>
  </nav>

export default Menu
