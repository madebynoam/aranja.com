import React, { Component } from 'react'
import classNames from 'classnames'
import { H1 } from '../../typography'
import ScrollIndicator from '../ScrollIndicator'
import HeroOverlay from './HeroOverlay'
import './styles.css'

class Hero extends Component {
  render() {
    const { img, title, intro, cover } = this.props
    return (
      <div className={classNames('Hero-wrap', cover && 'cover')}>
        <div className="Hero" style={{ backgroundImage: `url(${img})` }}>
          <div className="Hero-text">
            <H1 className="Hero-textHeading">
              {title}
            </H1>
          </div>

          <ScrollIndicator />
        </div>
      </div>
    )
  }
}

export default Hero
