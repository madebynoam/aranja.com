import React from 'react'
import classNames from 'classnames'
import './styles.css'

const Button = ({ children, light, to, className }) =>
  <a
    role="button"
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    className={classNames('Button', light && 'Button--light', className)}
  >
    {children}
  </a>

export default Button
