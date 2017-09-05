import React from 'react'
import classNames from 'classnames'
import Link from '../Link'
import './styles.css'

const Button = ({ children, light, to, className }) =>
  <Link
    noStyle
    role="button"
    href={to}
    className={classNames('Button', light && 'Button--light', className)}
  >
    {children}
  </Link>

export default Button
