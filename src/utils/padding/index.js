import PropTypes from 'prop-types'
import classNames from 'classnames'
import './styles.css'

const classMap = {
  top: {
    large: 'u-paddingTopLarge',
    medium: 'u-paddingTopMedium',
    small: 'u-paddingTopSmall',
    xsmall: 'u-paddingTopXSmall',
  },
  bottom: {
    large: 'u-paddingBottomLarge',
    medium: 'u-paddingBottomMedium',
    small: 'u-paddingBottomSmall',
    xsmall: 'u-paddingBottomXSmall',
  },
}

const padding = (top, bottom) => {
  return classNames(top && classMap.top[top], bottom && classMap.bottom[bottom])
}

padding.propTypes = {
  top: PropTypes.oneOf(['large', 'medium', 'small', 'xsmall']),
  bottom: PropTypes.oneOf(['large', 'medium', 'small', 'xsmall']),
}

export default padding
