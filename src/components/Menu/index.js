import React from 'react'
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
      <nav className="Menu">
        <Toggle open={open} onClick={this.handleClick.bind(this)} />
        <div className="Menu-overlay" />
      </nav>
    )
  }
}

export default Menu
