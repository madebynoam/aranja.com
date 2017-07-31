import React from 'react'
import { Body1, Body2, H1, H2, H3 } from '../../typography'
import Email from './email.svg'
import Facebook from './facebook.svg'
import Twitter from './twitter.svg'
import './styles.css'

const Footer = ({}) =>
  <section className="Footer Section">
    <H2 className="is-inverted" bottom="small">
      Contact us
    </H2>
    <div className="Footer-contactBox">
      <a
        href="mailto:aranja@aranja.com"
        className="Footer-contactBlock"
        style={{ backgroundImage: `url(${Email}` }}
      />
      <a
        href="https://www.facebook.com/aranja.is/"
        target="_blank"
        className="Footer-contactBlock"
        style={{ backgroundImage: `url(${Facebook}` }}
      />
      <a
        href="https://twitter.com/aranjastudio"
        target="_blank"
        className="Footer-contactBlock"
        style={{ backgroundImage: `url(${Twitter}` }}
      />
    </div>
  </section>

export default Footer
