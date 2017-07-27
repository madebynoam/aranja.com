import React from 'react'
import './styles.css'
import { H1 } from '../../../typography'

// The idea here is to display a customized hero for each CS.
// Aranja loves ${company} that animates in, f.x.
// Todo ^

const CSHero = ({ img, caption }) =>
  <div className="CSHero" style={{ backgroundImage: `url(${img})` }}>
    {/* <H1 className="CSHero-caption">
      Aranja{' '}
      <span
        role="img"
        aria-label="emoji heart"
        style={{
          position: 'relative',
          top: '0.5rem',
        }}
      >
        ❤️
      </span>{' '}
      {caption}
    </H1> */}
  </div>

export default CSHero
