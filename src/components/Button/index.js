import React from 'react'
import classNames from 'classnames'
import './styles.css'

const Button = ({ children, inverse }) =>
  <button className={classNames('Button', inverse && 'is-inversed')}>
    {children}
  </button>

export default Button
