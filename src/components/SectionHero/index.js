import React from 'react'
import './styles.css'

// The idea here is to display a customized hero for each CS.
// Aranja loves ${company} that animates in, f.x.
// Todo ^

const CSHero = ({ img, caption }) =>
  <div className="CSHero" style={{ backgroundImage: `url(${img})` }} />

export default CSHero
