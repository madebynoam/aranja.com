import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ScrollIndicator from '../ScrollIndicator'
import AnimatedText from '../AnimatedText'
import HeroPicture from '../Picture/HeroPicture'
import Parallax from '../Parallax'
import { H1, H2 } from '../../typography'
import './styles.css'

class Hero extends Component {
  render() {
    const { hero, text, darken, cover, parallax } = this.props
    return (
      <Parallax>
        <div
          className={classNames(
            'Hero',
            'darken',
            darken && 'darken',
            parallax && 'withParallax'
          )}
        >
          <HeroPicture src={hero.hero.src} parallax={parallax} />
          <ScrollIndicator />
        </div>
      </Parallax>
    )
  }
}

Hero.propTypes = {
  text: PropTypes.bool,
  darken: PropTypes.bool,
  cover: PropTypes.bool,
  hero: PropTypes.object,
}

export default Hero
