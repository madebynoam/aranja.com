import React, { Component } from 'react'
import SingleShowoff from './Showoff'
import Section from '../Section'
import ShadowText from '../ShadowText'
import { EditModal } from 'tux'
import './styles.css'

class Showoff extends Component {
  render() {
    const { showOffs } = this.props
    return (
      <Section>
        <ShadowText text="Performance" />
        <div className="Showoffs">
          {showOffs.items.map((showOff, i) =>
            <EditModal model={showOff} key={i}>
              <SingleShowoff
                key={i}
                heading={showOff.fields.title}
                copy={showOff.fields.text}
                image={showOff.fields.image && showOff.fields.image.fields.file.url}
              />
            </EditModal>,
          )}
        </div>
      </Section>
    )
  }
}

export default Showoff
