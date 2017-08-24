import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
import TypeKit from 'react-typekit'

const Page = ({ name, children }) =>
  <div className="Page">
    <TypeKit kitId="kee6nkk" />  
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
