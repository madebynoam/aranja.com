import React, { Component } from 'react'
import classNames from 'classnames'
import { H1, H3 } from '../../typography'
import ScrollIndicator from '../ScrollIndicator'
import HeroPicture from '../Picture/HeroPicture'
import './styles.css'

class Hero extends Component {
  render() {
    const { hero, title, darken, cover } = this.props
    return (
      <div className={classNames('Hero', darken && 'darken')}>
        <div className="Hero-content">
          <H1 className="Hero-heading">{title}</H1>
        </div>
        <HeroPicture src={hero.hero.src} cover={cover} />
        <ScrollIndicator />
      </div>
    )
  }
}

export default Hero
