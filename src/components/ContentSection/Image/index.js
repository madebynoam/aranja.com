import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Body2 } from '../../../typography'
import { withReveal } from '../../../hoc/withReveal'
import './styles.scss'

const Image = ({ img, caption, isVisible }) => (
  <div className={classNames('Image-wrap', isVisible && 'is-visible')}>
    <div className="Image">
      <div className="Image-bg" style={{ backgroundImage: `url(${img})` }} />
    </div>
    <Body2 top="small" bottom="small" className="Image-caption">
      {caption}
    </Body2>
  </div>
)

Image.propTypes = {
  img: PropTypes.string,
  caption: PropTypes.string
}

export default withReveal(Image)
