import React from 'react'
import classNames from 'classnames'
import margin from '../../utils/margin'
import './styles.css'

const Section = ({ noPadding, top, bottom, className, children }) =>
  <section className={classNames('Section', noPadding && 'no-padding', margin(top, bottom), className)}>
    {children}
  </section>

export default Section
