import React from 'react'
import Lines from '../components/Lines'
import Footer from '../components/Footer'
import { Editable } from 'tux'

const CaseStudies = ({ content }) =>
  <Editable model={content}>
    <div className="CaseStudies">
      <div className="Container">
        <Lines />
      </div>
      <Footer />
    </div>
  </Editable>

export default CaseStudies
