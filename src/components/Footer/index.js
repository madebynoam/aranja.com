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
      <Body2>team@aranja.com</Body2>
    </div>
    <div className="Footer-column">
      <h1 className="Footer-legend">Talk to us</h1>
      <Body2>(+354) 7878765</Body2>
    </div>
    <div className="Footer-column">
      <h1 className="Footer-legend">Follow us</h1>
      <div className="Footer-social">
        <a href="/" className="Footer-socialIcon">
          <img src={twitter} alt="" />
        </a>
        <a href="/" className="Footer-socialIcon">
          <img src={facebook} alt="" />
        </a>
        <a href="/" className="Footer-socialIcon">
          <img src={github} alt="" />
        </a>
      </div>
    </div>
  </section>

export default Footer
