import PropTypes from 'prop-types'
import classNames from 'classnames'
import './styles.css'

const classMap = {
  top: {
    xlarge: 'u-paddingTopXLarge',
    large: 'u-paddingTopLarge',
    medium: 'u-paddingTopMedium',
    small: 'u-paddingTopSmall',
    xsmall: 'u-paddingTopXSmall',
  },
  bottom: {
    xlarge: 'u-paddingBottomXLarge',
    large: 'u-paddingBottomLarge',
    medium: 'u-paddingBottomMedium',
    small: 'u-paddingBottomSmall',
    xsmall: 'u-paddingBottomXSmall',
  },
}

const margin = (top, bottom) => {
  return classNames(top && classMap.top[top], bottom && classMap.bottom[bottom])
}

margin.propTypes = {
  top: PropTypes.oneOf(['xlarge', 'large', 'medium', 'small', 'xsmall']),
  bottom: PropTypes.oneOf(['xlarge', 'large', 'medium', 'small', 'xsmall']),
}

export default margin
