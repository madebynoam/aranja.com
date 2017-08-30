// @flow
import React from 'react'
import PropTypes from 'prop-types'

function isLeftClickEvent(event) {
  return event.button === 0
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
}

class HistoryLink extends React.Component {
  componentWillMount() {
    this.handleClick = this.handleClick.bind(this)
  }

  isRemote() {
    const { href } = this.props
    if (this.context.history == null || !href) {
      return false
    }

    const locationHost = this.context.history.location.host
    const match = href.match(/^(?:\w+:)?\/\/([^/\s]+)/)
    return match && match[1] !== locationHost
  }

  isProtocol() {
    const { href } = this.props
    return href.match(/^(?:tel|mailto):/)
  }

  getTarget(blank) {
    let actualBlank = blank === 'auto' ? this.isRemote() : blank
    return actualBlank ? '_blank' : undefined
  }

  handleClick(event) {
    if (this.props.onClick) {
      this.props.onClick(event)
    }

    if (this.isRemote()) {
      return
    }

    if (this.isProtocol()) {
      return
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return
    }

    if (event.defaultPrevented === true) {
      return
    }

    if (this.context.history == null) {
      return
    }

    this.context.history.push(this.props.href)
    event.preventDefault()
  }

  render() {
    const { href, children, blank, ...props } = this.props

    return (
      <a
        href={href}
        target={this.getTarget(blank)}
        {...props}
        onClick={this.handleClick}
      >
        {children}
      </a>
    )
  }
}

HistoryLink.contextTypes = {
  history: PropTypes.object.isRequired
}

HistoryLink.defaultProps = {
  blank: false
}

export default HistoryLink
