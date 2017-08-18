import React from 'react'
import PropTypes from 'prop-types'
import Lines from '../Lines'
import Header from '../Header'
import Footer from '../Footer'

const Page = ({ name, children }) =>
  <div className="Page">
    <Header />
    <div className="container">
      {children}
    </div>
    <Footer />
  </div>

Page.propTypes = {
  name: PropTypes.string,
  children: PropTypes.array,
}

export default Page
