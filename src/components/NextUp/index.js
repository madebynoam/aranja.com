import React from 'react'
import './styles.css'

const NextUp = ({ nextPage = 'Case studies', url }) =>
  <div className="NextUp">
    <div className="NextUp-content">
      <h1 className="NextUp-contentHeading">Next up</h1>
      <a href={url} className="NextUp-page">
        {nextPage} <span className="nextUp-pageArrow" />
      </a>
    </div>
  </div>

export default NextUp
