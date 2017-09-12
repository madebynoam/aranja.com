import React, { Component } from 'react'
import classNames from 'classnames'
import { Body2 } from '../../../typography'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'
import './styles.scss'

const slides = [
  {
    image: img1,
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, sed.'
  },
  {
    image: img2,
    description: 'Amet consectetur adipisicing elit. Voluptatum, sed.'
  },
  {
    image: img3,
    description: 'Consectetur adipisicing elit. Voluptatum, sed.'
  },
  {
    image: img4,
    description: 'Lorem ipsum dolor sit.'
  }
]

class Slideshow extends Component {
  constructor() {
    super()
    this.state = {
      activeSlide: 0
    }
  }

  handleClick(index) {
    this.setState(prevState => {
      return { activeSlide: prevState.activeSlide + 1 >= slides.length ? 0 : prevState.activeSlide + index }
    })
  }

  render() {
    const { activeSlide } = this.state

    return (
      <div className="Slideshow">
        <div className="Slideshow-prev" onClick={() => this.handleClick(-1)} />
        <div className="Slideshow-next" onClick={() => this.handleClick(1)} />
        <div className="Slideshow-image">
          {slides.map((slide, index) => [
          <div
            key={index}
            className={classNames('Slideshow-imageInner', activeSlide === index && 'is-active')}
            style={{ backgroundImage: `url(${slide.image})` }}
          />,
          <div className={classNames('Slideshow-description', activeSlide === index && 'is-active')}>
            <Body2>{slide.description}</Body2>
          </div>
          ])}
        </div>
      </div>
    )
  }
}

export default Slideshow
