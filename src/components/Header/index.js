import React from 'react'
import classNames from 'classnames'
import './styles.css'
import logo from './logo.svg'
import logoInversed from './logo-inverse.svg'
import Menu from '../Menu'

const Header = ({ inversed, fixed }) =>
  <header className={classNames('Header', inversed && 'is-inversed', fixed && 'is-fixed')}>
    <a href="/">
      <img src={logoInversed} alt="" className="Header-logo" />
    </a>
    <Menu inversed />
  </header>

export default Header
