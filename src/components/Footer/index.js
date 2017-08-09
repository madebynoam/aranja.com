import React from 'react'
import { Body1, Body2, H1, H2, H3 } from '../../typography'
import github from './github.svg'
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import './styles.css'

const Footer = ({}) =>
  <section className="Footer">
    <H2 className="Footer-title" top="medium">
      Get in touch
    </H2>
    <div className="Footer-column">
      <h1 className="Footer-legend">Email us</h1>
      <Body2><a href="mailto:hello@aranja.com">hello@aranja.com</a></Body2>
    </div>
    <div className="Footer-column">
      <h1 className="Footer-legend">Talk to us</h1>
      <Body2><a href="tel:+3546968666">(+354) 696-8666</a></Body2>
    </div>
    <div className="Footer-column">
      <h1 className="Footer-legend">Follow us</h1>
      <div className="Footer-social">
        <a href="https://twitter.com/aranjastudio" className="Footer-socialIcon">
          <img src={twitter} alt="Aranja on Twitter" />
        </a>
        <a href="https://facebook.com/aranja.is" className="Footer-socialIcon">
          <img src={facebook} alt="Aranja on Facebook" />
        </a>
        <a href="https://github.com/aranja" className="Footer-socialIcon">
          <img src={github} alt="Aranja on Github" />
        </a>
      </div>
    </div>
  </section>

export default Footer
