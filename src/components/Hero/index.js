import React, { Component } from 'react'
import classNames from 'classnames'
import { H1 } from '../../typography'
import ScrollIndicator from '../ScrollIndicator'
import HeroOverlay from './HeroOverlay'
import './styles.css'

class Hero extends Component {
  render() {
    const { img, title, intro, cover, meta } = this.props
    return (
      <div className={classNames('Hero-wrap', cover && 'cover')}>
        <HeroOverlay intro={intro} />
          <div className="Hero" style={{ backgroundImage: `url(${img})` }}>
            <div className="Hero-text">
              <H1 className="Hero-textHeading">
                {title}
              </H1>
            </div>
            {meta &&
              <a href="//kolibri.is" className="Hero-meta">
                <span className="Hero-metaFrom">Dec 2016</span>
                <span className="Hero-metaDecorator"></span>
                <span className="Hero-metaTo">Jan 2017</span>
                <div className="Hero-metaLink">
                  <span className="arrow"></span>
                  <span>Visit project</span>
                </div>
              </a>
            }
            <ScrollIndicator />
          </div>
      </div>
    )
  }
}

export default Hero
