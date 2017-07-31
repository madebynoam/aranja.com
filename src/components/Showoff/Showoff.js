import React from 'react'
import Parallax from '../Parallax'
import { Body1, H3 } from '../../typography'

const SingleShowoff = ({ heading, copy, image }) =>
  <div className="Showoff">
    <div className="Showoff-wrap">
      <div className="Showoff-content">
        <H3 className="Showoff-heading">
          {heading}
        </H3>
        <Body1 className="Showoff-copy">
          {copy}
        </Body1>
      </div>
    </div>
    <Parallax>
      <div className="Showoff-imageWrapper">
        <div
          className="Showoff-image"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      </div>
    </Parallax>
  </div>

export default SingleShowoff
