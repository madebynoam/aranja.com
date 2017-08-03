import React from 'react'
import classNames from 'classnames'
import { H1, Chapter } from '../../typography'
import img01 from './Aranja00067.jpg'
import img02 from './Aranja00663.jpg'
import './styles.css'
import logo from './logo.svg'
import Menu from '../Menu'
import ScrollIndicator from '../ScrollIndicator'

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
      <div className="Hero">
        {items.map((item, index) =>
          <div
            className={classNames('Hero-item', index === activeSlide && 'is-active')}
            style={{ backgroundImage: `url(${item.background})` }}
          >
            <img className="Hero-logo" src={logo} alt="" />
            <div className="Hero-text">
              <H1>
                {item.title}
              </H1>
              <Chapter>Read case study</Chapter>
            </div>
          </div>,
        )}
        <ScrollIndicator />
      </div>
    )
  }
}

export default Hero
