import PropTypes from 'prop-types'
import classNames from 'classnames'
import './styles.css'

const classMap = {
  top: {
    large: 'u-marginTopLarge',
    medium: 'u-marginTopMedium',
    small: 'u-marginTopSmall',
    xsmall: 'u-marginTopXSmall',
  },
  bottom: {
    large: 'u-marginBottomLarge',
    medium: 'u-marginBottomMedium',
    small: 'u-marginBottomSmall',
    xsmall: 'u-marginBottomXSmall',
  },
}

const margin = (top, bottom) => {
  return classNames(top && classMap.top[top], bottom && classMap.bottom[bottom])
}

margin.propTypes = {
  top: PropTypes.oneOf(['large', 'medium', 'small', 'xsmall']),
  bottom: PropTypes.oneOf(['large', 'medium', 'small', 'xsmall']),
}

export default margin
