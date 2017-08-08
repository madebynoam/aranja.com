import React from 'react'
import './styles.css'
import logo from './logo.svg'
import Menu from '../Menu'

const Header = ({}) =>
  <div className="Header">
    <img src={logo} alt="" className="Header-logo" />
    <Menu />
  </div>

export default Header
