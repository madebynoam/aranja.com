import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Parallax from '../Parallax'
import { Body1, H2 } from '../../typography'
import { withReveal } from '../../hoc/withReveal'
import './styles.css'
import AnimatedText from '../AnimatedText'

const Service = ({ heading, copy, image, isVisible, hasBeenSeen }) =>
  <div className={classNames('Service', isVisible && 'is-visible')}>
    <div className="Service-contentWrap">
      <div className="Service-content">
        <H2 bottom="small" className="Service-heading">
          <AnimatedText>
            {heading.replace(' ', '\n')}
            {/* Todo: something else. */}
          </AnimatedText>
        </H2>
        <Body1 bottom="small" className="Service-copy">
          <AnimatedText>
            {copy}
          </AnimatedText>
        </Body1>
      </div>
    </div>
    <Parallax clamp>
      <div className="Service-imageWrapper">
        <div className="Service-image" data-animate="image">
          <div
            className="Service-imageInner"
            style={{
              backgroundImage: `url(${image})`
            }}
          />
        </div>
      </div>
    </Parallax>
  </div>

Service.propTypes = {
  heading: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.string
}

export default withReveal(Service)
