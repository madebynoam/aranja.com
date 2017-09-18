import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Link from '../Link'
import logo from './logo.svg'
import './styles.scss'

// Todo, we should pull available pages from Contentful
const nav = [
  { title: 'Home', slug: 'home' },
  { title: 'Work', slug: 'work' },
  { title: 'About', slug: 'about' },
  { title: 'Contact', slug: 'contact' }
]

const FULL = 'full'
const COLLAPSED = 'collapsed'

const Header = ({ inversed, activePage, mode }) => (
  <header
    className={classNames(
      'Header',
      mode === COLLAPSED && 'is-collapsed',
      mode === FULL && 'is-full'
    )}
  >
    <Link noStyle href="/">
      <img src={logo} alt="Aranja logo" className="Header-logo" />
    </Link>
    <nav className="Menu">
      {nav.map(nav => (
        <Link
          noStyle
          className={classNames(
            'Menu-item',
            activePage === nav.title.toLowerCase() && 'is-active',
            nav.title === 'Home' && activePage === '' && 'is-active'
          )}
          href={`/${nav.slug}`}
          key={nav.title}
        >
          {nav.title}
        </Link>
      ))}
    </nav>
  </header>
)

Header.propTypes = {
  mode: PropTypes.oneOf([COLLAPSED, FULL])
}

export default Header
