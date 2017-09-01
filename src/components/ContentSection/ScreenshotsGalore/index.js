import React from 'react'

const ScreenshotsGalore = ({ screenshots }) => (
  <div className="ScreenshotsGalore">
    {screenshots.map(shot => 
    <img src={shot} alt="" />
    )}
  </div>
)

export default ScreenshotsGalore