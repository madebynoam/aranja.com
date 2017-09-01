import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import padding from '../utils/padding'
import './styles.css'

const createStyle = (defaultComponent, style, substyles = {}) => {
  const substyleKeys = Object.keys(substyles)

  const component = props => {
    const className = classNames(
      style,
      padding(props.top, props.bottom),
      substyleKeys.map(key => props[key] && substyles[key]),
      props.className,
    )
    return React.createElement(props.component || defaultComponent, { className }, props.children)
  }

  component.propTypes = {
    ...padding.propTypes,
    children: PropTypes.node,
    component: PropTypes.node,
  }
  substyleKeys.forEach(key => component.propTypes[key])

  return component
}

export const H1 = createStyle('h1', 't-h1', {
  black: 't-black',
  light: 't-light',
  center: 't-center',
  lineHeight: 't-lineheight'
})
export const H2 = createStyle('h2', 't-h2', {
  black: 't-black',
  light: 't-light',
  center: 't-center',
  lineHeight: 't-lineheight'
})
export const H3 = createStyle('h3', 't-h3', {
  black: 't-black',
  light: 't-light',
  center: 't-center',
  lineHeight: 't-lineheight'
})
export const H4 = createStyle('h4', 't-h4', {
  black: 't-black',
  light: 't-light',
  center: 't-center',
  lineHeight: 't-lineheight'
})
export const Body1 = createStyle('p', 't-body1', {
  strong: 't-medium',
  center: 't-center',
})
export const Body2 = createStyle('p', 't-body2', {
  strong: 't-medium',
  center: 't-center',
})
