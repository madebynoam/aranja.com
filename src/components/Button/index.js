import React from 'react'
import classNames from 'classnames'
import Link from '../Link'
import './styles.css'

const Button = ({ children, light, to, className, isExternal }) =>
  <Link
    noStyle
    role="button"
    href={to}
    className={classNames('Button', light && 'Button--light', className)}
    target={isExternal ? '_blank' : false}
    rel={isExternal ? 'noopener noreferrer' : false}
  >
    {children}
  </Link>

export default Button
