import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
import './styles.css'

const Page = ({ name, children }) =>
  <div className="Page">
    <Header />
    {children}
    <Footer />
  </div>

  Page.propTypes = {
  name: PropTypes.string,
  children: PropTypes.array,
}

export default Page
