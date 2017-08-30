import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Parallax from '../Parallax'
import { Body1, H2 } from '../../typography'
import { withReveal } from '../../hoc/withReveal'
import './styles.css'

const Service = ({ heading, copy, image, isVisible, hasBeenSeen }) =>
  <div className={classNames('Service', isVisible && 'is-visible')}>
    <div className="Service-contentWrap">
      <div className="Service-content">
        <H2 className="Service-heading" bottom="small">
          {heading.split(' ').map((word, i) => {
            return (
              <span className="u-mask" key={i}>
                <span className="u-maskInner" data-animate="text">
                  {word}
                </span>
              </span>
            )
          })}
        </H2>
        <Body1 bottom="small" className="Service-copy">
          <span className="u-mask">
            <span className="u-maskInner" data-animate="text">
              {copy}
            </span>
          </span>
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
