import React from 'react'
import './styles.css'

const NextUp = ({ nextPage = 'Case studies' }) =>
  <div className="NextUp">
    <div className="NextUp-content">
      <h1 className="NextUp-contentHeading">Next up</h1>
      <p className="NextUp-page">
        {nextPage} <span className="nextUp-pageArrow" />
      </p>
    </div>
  </div>

export default NextUp
