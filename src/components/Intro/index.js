import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { H1, H2, H4 } from '../../typography'
import AnimatedText from '../AnimatedText'
import './styles.css'

const Intro = ({ main, text, description }) =>
  <div className={classNames('Intro', main && 'main')}>
    <div className="Intro-split">
    <AnimatedText
      component={main ? H1 : H2}
      text={text}
    />
    </div>
    {description &&
      <div className="Intro-split">
        <AnimatedText
        className="Intro-description"
        component={H4}
        text={description}
      />
      </div>
    }
  </div>

Intro.propTypes = {
  main: PropTypes.bool,
  text: PropTypes.string.isRequired,
  description: PropTypes.string,
}
export default Intro
