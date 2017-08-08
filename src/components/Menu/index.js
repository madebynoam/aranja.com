import React from 'react'
import classNames from 'classnames'
import Toggle from './Toggle'
import './styles.css'

class Menu extends React.Component {
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
    return (
      <nav className={classNames('Menu', open && 'is-open')}>
        <Toggle open={open} onClick={this.handleClick.bind(this)} />
        <div className="Menu-overlay">
          <div className="Menu-content">
            <marquee style={{ color: 'rebeccapurple', marginBottom: '2rem' }}>
              Super temp menu
            </marquee>
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
