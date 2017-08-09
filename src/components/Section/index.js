import React from 'react'
import classNames from 'classnames'
import padding from '../../utils/padding'
import './styles.css'

const className = classNames()
const Section = ({ top, bottom, children }) =>
  <section className={classNames('Section', padding(top, bottom))}>
    {children}
  </section>

export default Section
