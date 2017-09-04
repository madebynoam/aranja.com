import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Header from '../Header'
import Footer from '../Footer'
import './styles.css'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMounted: false,
    }
  }

  componentDidMount() {
    this.setState({
      isMounted: true
    })
  }

  render() { 
    const { isMounted } = this.state
    const { name, children } = this.props
    const isHome = name === 'Home'
 
  return (
    <div className={classNames('Page', isMounted && 'is-mounted')}>
      <Header active={name} inversed={isHome} fixed={isHome} />
        <div className="Page-inner">
          {children}
        </div>
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
