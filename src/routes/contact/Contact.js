import React, { Component } from 'react'
import Section from '../../components/Section'
import './styles.scss'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sent: false,
    }
  }

  render() {
    return (
      <Section>
        <div className="Contact">
          Contact
        </div>
      </Section>
    )
  }
}

export default Contact