import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Menu = () =>
  <nav className="Menu">
    <a className="Menu-item is-active" href="/">
      Home
    </a>
    <a className="Menu-item" href="/work">
      Work
    </a>
    <a className="Menu-item" href="/about">
      About
    </a>
  </nav>

Menu.propTypes = {
  inversed: PropTypes.bool,
}
export default Menu
