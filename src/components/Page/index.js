import React from 'react'
import Lines from '../Lines'
import Header from '../Header'
import Footer from '../Footer'

const Page = ({ name, home, children }) =>
  <div className="Page">
    <Header inversed={home} fixed={home} />
    <div className="container">
      <Lines />
      {children}
    </div>
    <Footer />
  </div>

export default Page
