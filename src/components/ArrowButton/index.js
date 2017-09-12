import React from 'react'
import classNames from 'classnames'
import Button from '../Button'
import './styles.scss'

const ArrowButton = ({ to, children, noBorder }) =>
  <Button
    to={to}
    className={classNames('ArrowButton', noBorder && 'no-border')}
    isExternal
  >
    {children}
  </Button>

export default ArrowButton
