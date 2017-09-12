import React from 'react'
import classNames from 'classnames'
import padding from '../../utils/padding'
import './styles.scss'

const Section = ({ noPadding, top, bottom, className, children }) =>
  <section className={classNames('Section', noPadding && 'no-padding', padding(top, bottom), className)}>
    {children}
  </section>

export default Section
