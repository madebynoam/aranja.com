import React from 'react'
import classNames from 'classnames'
import Link from '../Link'
import logo from './logo.svg'
import logoInversed from './logo-inverse.svg'
import './styles.css'

// Todo, we should pull available pages from Contentful
const nav = [
  { title: 'Home', slug: 'home' },
  { title: 'Work', slug: 'work' },
  { title: 'About', slug: 'about' }
]

const Header = ({ inversed, active, fixed }) =>
  <header
    className={classNames(
      'Header',
      inversed && 'is-inversed',
      fixed && 'is-fixed'
    )}
  >
    <Link noStyle href="/">
      <img
        src={inversed ? logoInversed : logo}
        alt="Aranja logo"
        className="Header-logo"
      />
    </Link>
    <nav className="Menu">
      {nav.map(nav =>
        <Link
          noStyle
          className={classNames(
            'Menu-item',
            active === nav.title && 'is-active'
          )}
          href={`/${nav.slug}`}
          key={nav.title}
        >
          {nav.title}
        </Link>
      )}
    </nav>
  </header>

export default Header
