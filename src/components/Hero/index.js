import React from 'react'
import { H1, H2, H3, Body1, Body2, Chapter } from '../../typography'
import img01 from './Aranja00067.jpg'
import './styles.css'
import logo from './logo.svg'
import Menu from '../Menu'
import ScrollIndicator from '../ScrollIndicator'

const Hero = ({}) =>
  <div className="Hero">
    <div className="Hero-content" style={{ backgroundImage: `url(${img01})` }}>
      <img className="Hero-logo" src={logo} alt="" />
      <div className="Hero-text">
        <H1>Team work is the name of the game</H1>
        <Chapter>Read case study</Chapter>
      </div>
    </div>
    <ScrollIndicator />
  </div>

export default Hero
