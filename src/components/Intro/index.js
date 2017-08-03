import React from 'react'
import { H1, H2, H3, Body1, Body2, Chapter } from '../../typography'
import img01 from './Aranja00067.jpg'
import './styles.css'
import logo from './logo.svg'
import Menu from '../Menu'
import ScrollIndicator from '../ScrollIndicator'

const Intro = ({}) =>
  <div className="Intro">
    <div className="Intro-content" style={{ backgroundImage: `url(${img01})` }}>
      <img className="Intro-logo" src={logo} alt="" />
      <div className="Intro-text">
        <H1>Team work is the name of the game</H1>
        <Chapter>Read case study</Chapter>
      </div>
    </div>
    <ScrollIndicator />
  </div>

export default Intro
