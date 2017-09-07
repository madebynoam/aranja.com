import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { H1, H2, H4 } from '../../typography'
import AnimatedText from '../AnimatedText'
import './styles.css'
const Intro = ({ main, text, description }) => {
  const Component = main ? H1 : H2
  return (
    <div className={classNames('Intro', main && 'main')}>
      <div className="Intro-split">
        <Component>
          <AnimatedText animation="appearUpSlow">{text}</AnimatedText>
        </Component>
      </div>
      {description && (
        <div className="Intro-split">
        <H4 className="Intro-description">
          <AnimatedText animation="appearUpSlow">{description}</AnimatedText>
        </H4>
        </div>
      )}
    </div>
  )
}

Intro.propTypes = {
  main: PropTypes.bool,
  text: PropTypes.string.isRequired,
  description: PropTypes.string
}
export default Intro
