import React from 'react'
import './styles.css'

const Menu = ({}) =>
  <nav className="Menu">
    <a href="#" className="Menu-logo">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/138822/aranja-logo.svg" alt="" />
    </a>
    <ul>
      <li className="Menu-item is-active">What we do</li>
      <li className="Menu-item">Who we are</li>
      <li className="Menu-item">Case studies</li>
      <li className="Menu-item">Work with us</li>
    </ul>
  </nav>

export default Menu
