import React, { Component } from 'react'
import classNames from 'classnames'
import { H1, H3 } from '../../typography'
import ScrollIndicator from '../ScrollIndicator'
import AnimatedText from '../AnimatedText'
import HeroPicture from '../Picture/HeroPicture'

import './styles.css'

class Hero extends Component {
  render() {
    const { hero, title, darken, cover } = this.props
    return <div className={classNames("Hero", "darken", darken && "darken", cover && "cover")}>
        <div className="Hero-content">
          <h1 className="Hero-text">
            <AnimatedText text={['At Aranja, we like to ', 'do things properly' ]}/>
          </h1>
        </div>
        <HeroPicture src={hero.hero.src} cover={cover} />
        <ScrollIndicator />
      </div>;
  }
}

export default Hero
