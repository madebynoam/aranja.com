import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import HeroPicture from '../Picture/HeroPicture'
import Parallax from '../Parallax'
import './styles.scss'

class Hero extends Component {
  render() {
    const { hero, parallax } = this.props
    return (
      <Parallax>
        <div className={classNames('Hero', parallax && 'withParallax')}>
          <HeroPicture src={hero && hero.hero.src} parallax={parallax} />
        </div>
      </Parallax>
    )
  }
}

Hero.propTypes = {
  text: PropTypes.bool,
  cover: PropTypes.bool,
  hero: PropTypes.object
}

export default Hero
