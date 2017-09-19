import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Link from '../Link'
import logo from './logo.svg'
import './styles.scss'
import './mobileMenu.scss'

// Todo, we should pull available pages from Contentful
const nav = [
  { title: 'Home', slug: 'home' },
  { title: 'Work', slug: 'work' },
  { title: 'About', slug: 'about' },
  { title: 'Contact', slug: 'contact' }
]

const FULL = 'full'
const COLLAPSED = 'collapsed'

const Header = ({ inversed, activePage, mode, handleReveal }) => [
  <header
    className={classNames(
      'Header',
      mode === COLLAPSED && 'is-collapsed',
      mode === FULL && 'is-full',
    )}
    key="header"
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
    <button className="MenuTrigger" onClick={handleReveal}>
      <svg fill="#3c435f" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path className="MenuTrigger-bar" d="M492 76H20C8.954 76 0 84.954 0 96s8.954 20 20 20h472c11.046 0 20-8.954 20-20s-8.954-20-20-20z"/>
        <path className="MenuTrigger-bar" d="M492 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h472c11.046 0 20-8.954 20-20s-8.954-20-20-20z"/>
        <path className="MenuTrigger-bar" d="M492 396H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h472c11.046 0 20-8.954 20-20s-8.954-20-20-20z"/>
      </svg>
    </button>
  </header>,
  <nav aria-hidden className="MobileMenu" key="mobile-menu">
    {nav.map(nav => (
      <Link
        noStyle
        className={classNames(
          'MobileMenu-item',
          activePage === nav.title.toLowerCase() && 'is-active',
          activePage === '' && 'is-active'
        )}
        href={`/${nav.slug}`}
        key={nav.title}
      >
        {nav.title}
      </Link>
    ))}
  </nav>
]

Header.propTypes = {
  mode: PropTypes.oneOf([COLLAPSED, FULL])
}

export default Header
