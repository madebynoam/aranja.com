import React, { Component } from 'react'
import PropTypes from 'prop-types'
import root from 'window-or-global'
import Header from '../Header'
import Footer from '../Footer'
import './styles.css'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      route: null
    }
  }

  componentDidMount() {
    root.scrollTo(0, 0)
  }

  render() {
    const { name, children, in: inProp } = this.props
    const isHome = name === 'Home'

    return (
      <div className="Page">
            <Header active={name} inversed={isHome} fixed={isHome} />
            <div className="Page-inner">{children}</div>
            <Footer />
          </div>
    )
  }
}

Page.propTypes = {
  name: PropTypes.string,
  children: PropTypes.array
}

export default Page
