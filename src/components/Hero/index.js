import React from 'react'
import classNames from 'classnames'
import { H1, Legend } from '../../typography'
import img01 from './Aranja00067.jpg'
import img02 from './Aranja00663.jpg'
import './styles.css'
import logo from './logo.svg'
import ScrollIndicator from '../ScrollIndicator'
import HeroOverlay from './HeroOverlay'

const items = [
  {
    background: img01,
    title: 'Team work is the name of the game',
    link: '/',
  },
  {
    background: img02,
    title: 'We\'re looking for a talented Front-end Engineer',
    link: '/',
  },
]

class Hero extends React.Component {
  constructor() {
    super()
    this.state = {
      activeSlide: 0,
    }
  }
  render() {
    const { activeSlide } = this.state

    return (
      <div className="Hero-wrap">
        <HeroOverlay />
        <div className="Hero">
          <img className="Hero-logo" src={logo} alt="" />
          {items.map((item, index) =>
            <div
              key={item.title}
              className={classNames('Hero-item', index === activeSlide && 'is-active')}
              style={{ backgroundImage: `url(${item.background})` }}
            >
              <div className="Hero-text">
                <H1 className="Hero-textHeading">
                  {item.title}
                </H1>
                <Legend className="Hero-textLegend">Read case study</Legend>
              </div>
            </div>,
          )}
          <ScrollIndicator />
        </div>
      </div>
    )
  }
}

export default Hero
