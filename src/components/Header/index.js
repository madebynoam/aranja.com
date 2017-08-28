import React from 'react'
import classNames from 'classnames'
import './styles.css'
import logo from './logo.svg'
import logoInversed from './logo-inverse.svg'

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
  {console.log(active)}
    <a href="/">
      <img
        src={inversed ? logoInversed : logo}
        alt=""
        className="Header-logo"
      />
    </a>
    <nav className="Menu">
      {nav.map(nav =>
        <a
          className={classNames('Menu-item', active === nav.title && 'is-active')}
          href={`/${nav.slug}`}
          key={nav.title}
        >
          {nav.title}
        </a>
      )}
    </nav>
  </header>

export default Header
