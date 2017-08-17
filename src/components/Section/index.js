import React from 'react'
import classNames from 'classnames'
import padding from '../../utils/padding'
import './styles.css'

const Section = ({ top, bottom, className, children }) =>
  <section className={classNames('Section', padding(top, bottom), className)}>
    {children}
  </section>

export default Section
