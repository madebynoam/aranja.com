import React from 'react'
import Container from '../Container'
import './styles.css'

const ContactModal = ({}) =>
  <div className="ContactModal">
    <button className="ContactModal-closeButton">
      <span className="ContactModal-closeIcon">&#9587;</span>
    </button>
    <Container>
      <h2 className="ContactModal-title is-inverted">Any questions?</h2>
      <div className="ContactModal-formBox">
        <form className="ContactModal-form" action="#" method="post">
          <div className="ContactModal-formGroup ContactModal-formGroup--small">
            <input
              className="ContactModal-input"
              type="text"
              id="name"
              required
            />
            <div className="ContactModal-inputBorder" />
            <label className="ContactModal-label" htmlFor="name">
              Your Name
            </label>
          </div>
          <div className="ContactModal-formGroup ContactModal-formGroup--small">
            <input
              className="ContactModal-input"
              type="text"
              id="email"
              required
            />
            <div className="ContactModal-inputBorder" />
            <label className="ContactModal-label" htmlFor="email">
              Your E-Mail Address
            </label>
          </div>
          <div className="ContactModal-formGroup ContactModal-formGroup--large">
            <input
              className="ContactModal-input"
              type="text"
              id="subject"
              required
            />
            <div className="ContactModal-inputBorder" />
            <label className="ContactModal-label" htmlFor="subject">
              Subject
            </label>
          </div>
          <div className="ContactModal-formGroup ContactModal-formGroup--large">
            <label
              className="ContactModal-label ContactModal-label--textarea"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea className="ContactModal-textarea" id="message" required />
          </div>
          <input className="ContactModal-submit" type="submit" value="Senda" />
        </form>
      </div>
    </Container>
  </div>

export default ContactModal
