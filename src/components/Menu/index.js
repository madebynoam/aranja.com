import React from 'react'
import logo from './logo.svg'
import './styles.css'

const Menu = ({}) =>
  <nav className="Menu">
    <a href="/" className="Menu-logo">
      <img src={logo} alt="" />
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
