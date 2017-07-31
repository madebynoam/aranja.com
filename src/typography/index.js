import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import padding from '../utils/padding'
import './styles.css'

const createStyle = (name, defaultComponent, style, substyles = {}) => {
  const substyleKeys = Object.keys(substyles)

  const component = props => {
    const className = classNames(
      style,
      padding(props.top, props.bottom),
      substyleKeys.map(key => props[key] && substyles[key]),
      props.className
    )
    return React.createElement(
      props.component || defaultComponent,
      { className },
      props.children
    )
  }

  component.propTypes = {
    ...padding.propTypes,
    children: PropTypes.node,
    component: PropTypes.node,
  }
  substyleKeys.forEach(key => component.propTypes[key])
  component.displayName = name

  return component
}

export const H1 = createStyle('H1', 'h1', 't-h1', {
  light: 't-light',
  center: 't-center',
})
export const H2 = createStyle('H2', 'h2', 't-h2', {
  light: 't-light',
  center: 't-center',
})
export const H3 = createStyle('H3', 'h3', 't-h3', {
  light: 't-light',
  center: 't-center',
})
export const Body1 = createStyle('Body1', 'p', 't-body1', {
  strong: 't-medium',
  center: 't-center',
})
export const Body2 = createStyle('Body2', 'p', 't-body2', {
  strong: 't-medium',
  center: 't-center',
})
