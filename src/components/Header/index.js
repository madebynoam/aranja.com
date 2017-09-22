import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Link from '../Link'
import './styles.scss'
import './mobileMenu.scss'

// Todo, we should pull available pages from Contentful
const nav = [
  { title: 'Home', slug: '' },
  { title: 'Work', slug: 'work' },
  { title: 'About', slug: 'about' },
  // { title: 'Contact', slug: 'contact' }
]

const FULL = 'full'
const COLLAPSED = 'collapsed'

const Header = ({
  inversed,
  activePage,
  mode,
  triggerMobileMenu,
  isMobileMenuOpen
}) => (
  <header
    className={classNames(
      'Header',
      mode && `is-${mode}`,
      isMobileMenuOpen && 'mobile-menu-is-open'
    )}
  >
    <Link noStyle href="/" className="Header-logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 524.9 117.7"
        fill="#3c435f"
      >
        <path d="M90.7 44.4C90.2 19.8 70.1.1 45.4.1 20.3.1 0 20.4 0 45.5s20.3 45.4 45.4 45.4c6.7 0 13-1.4 18.7-4V65.8c-4.9 4.5-11.5 7.3-18.7 7.3-15.2 0-27.6-12.4-27.6-27.6s12.4-27.6 27.6-27.6c14.8 0 27 11.8 27.6 26.5v46.5h17.8l-.1-46.5z" />
        <path d="M108.6 44.4v46.5h17.8V45.5c0-15.2 12.4-27.6 27.6-27.6V.1c-24.8 0-44.8 19.7-45.4 44.3" />
        <path d="M253.6 44.4C253 19.8 232.9.1 208.2.1c-25.1 0-45.4 20.3-45.4 45.4s20.3 45.4 45.4 45.4c6.7 0 13-1.4 18.7-4V65.8c-4.9 4.5-11.5 7.3-18.7 7.3-15.2 0-27.6-12.4-27.6-27.6s12.4-27.6 27.6-27.6c14.8 0 27 11.8 27.6 26.5v46.5h17.8V44.4z" />
        <path d="M316.7 0c-24.7 0-44.8 19.7-45.4 44.3v46.5h17.8V45.4c0-15.2 12.4-27.6 27.6-27.6 15.2 0 27.6 12.4 27.6 27.6v45.4h17.8V45.4c0-25.1-20.3-45.4-45.4-45.4" />
        <path d="M407 0h-26.7v17.9h18.2v45.5c0 20.1-16.4 36.5-36.4 36.5h-17.8v17.8h17.8c29.9 0 54.3-24.4 54.3-54.3V0H407z" />
        <path d="M524.9 44.3C524.3 19.7 504.2 0 479.5 0c-25.1 0-45.4 20.3-45.4 45.4s20.3 45.4 45.4 45.4c6.7 0 13-1.4 18.7-4V65.7c-4.9 4.5-11.5 7.3-18.7 7.3-15.2 0-27.6-12.4-27.6-27.6 0-15.2 12.4-27.6 27.6-27.6 14.8 0 27 11.8 27.6 26.5v46.5h17.8V44.3z" />
      </svg>
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
    <button className="MenuTrigger" onClick={triggerMobileMenu}>
      <div className="Burger-container">
        <div className="Burger">
          <div className="Burger-bar top" />
          <div className="Burger-bar bottom" />
        </div>
      </div>
    </button>
  </header>
)

Header.propTypes = {
  mode: PropTypes.oneOf([COLLAPSED, FULL])
}

export default Header
