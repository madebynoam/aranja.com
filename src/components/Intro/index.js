import React from 'react'
import { EditInline } from 'tux'
import './styles.css'

const Intro = ({}) =>
  <div className="Intro-wrapper">
    <div className="Intro">
      <div className="Intro-content">
        <h1 className="Intro-heading">
          <EditInline field="fields.content.heading">
            Development Studio based in Reykjavik
          </EditInline>
        </h1>
      </div>
    </div>
    {/* <div className="DownArrow" /> */}
  </div>

export default Intro
