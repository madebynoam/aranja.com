import React from 'react'
import classNames from 'classnames'
import './styles.css'

const Button = ({ children, dark, className }) =>
  <button className={classNames('Button', dark && 'Button--dark', className)}>
    {children}
  </button>

export default Button
