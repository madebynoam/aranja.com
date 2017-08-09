import React, { Component } from 'react'
import classNames from 'classnames'
import Toggle from './Toggle'
import './styles.css'

class Menu extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
  }
  handleClick() {
    this.setState(prevState => {
      return { open: !prevState.open }
    })
  }
  render() {
    const { open } = this.state
    const { inversed } = this.props
    return (
      <nav className={classNames('Menu', open && 'is-open', inversed && 'is-inversed')}>
        <Toggle open={open} onClick={this.handleClick.bind(this)} />
        <div className="Menu-overlay">
          <div className="Menu-content">
            <a className="Menu-item" href="/">
              Home
            </a>
            <a className="Menu-item" href="/team">
              Team
            </a>
            <a className="Menu-item" href="/casestudies">
              Case Studies
            </a>
            <a className="Menu-item" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Menu
