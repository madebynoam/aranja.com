import React, { Component } from 'react'
import classNames from 'classnames'
import { Form, Textarea, Text, Select } from 'react-form'

const isValidName = function validateName(name) {
  var re = /^[a-zA-Z ]+$/
  return re.test(name)
}

const isValidEmail = function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const isValidMessage = function validateMessage(message) {
  return message && message.length > 0
}

const emails = {
  project: 'hello@aranja.com',
  consulting: 'hello@aranja.com',
  other: 'hello@aranja.com'
}

class ContactForm extends Component {
  render() {
    const { reportSendStatus } = this.props

    return (
      <Form
        onSubmit={values => {
          fetch(`https://formspree.io/${emails[values.subject]}`, {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(values)
          }).then(() => {
            console.log('......')
            reportSendStatus(values.name)
          })
        }}
        defaultValues={{
          name: '',
          email: '',
          subject: '',
          budget: null,
          message: ''
        }}
        validate={({ name, email, subject, budget, message }) => {
          return {
            name:
              !name || !isValidName(name) ? 'A name is required' : undefined,
            email:
              !email || !isValidEmail(email)
                ? 'A valid e-mail is required'
                : undefined,
            message:
              !message || !isValidMessage(message)
                ? 'Did you forget to write us a message?'
                : undefined
          }
        }}
      >
        {({
          values,
          submitForm,
          addValue,
          removeValue,
          getError,
          setValue
        }) => {
          const isUnavailable =
            !values.name || (!values.email || !isValidEmail(values.email))
          return (
            <form onSubmit={submitForm}>
              <div className="Contact">
                <div className="Contact-group">
                  <div className="Contact-item">
                    <label className="t-body2" htmlFor="name" id="name">
                      Your name
                    </label>
                    <Text field="name" placeholder="What should we call you?" />
                  </div>
                  <div className="Contact-item">
                    <label className="t-body2" htmlFor="email">
                      Your email
                    </label>
                    <Text
                      id="email"
                      field="email"
                      placeholder="How can we reach you?"
                    />
                  </div>
                </div>
                <div
                  className={classNames(
                    'Contact-group',
                    isUnavailable && 'is-unavailable'
                  )}
                >
                  <div className="Contact-item">
                    <label className="t-body2" htmlFor="subject">
                      What are you contacting us regarding?
                    </label>
                    <Select
                      disabled={isUnavailable}
                      field="subject"
                      id="subject"
                      options={[
                        {
                          label: 'Project',
                          value: 'project'
                        },
                        {
                          label: 'Consulting',
                          value: 'consulting'
                        },
                        { label: 'Other', value: 'other' }
                      ]}
                    />
                  </div>
                  {values.subject === 'project' && (
                    <div className="Contact-item">
                      <label className="t-body2" htmlFor="budget">
                        What is your budget?
                      </label>
                      <Select
                        disabled={isUnavailable}
                        field="budget"
                        id="budget"
                        options={[
                          {
                            label: 'Less than $10,000.00',
                            value: 'Less than $10,000.00'
                          },
                          {
                            label: 'Between $10,000.00 and $30,000.00',
                            value: 'Between $10,000.00 and $30,000.00'
                          },
                          {
                            label: 'Over $30,000.00',
                            value: 'Over $30,000.00'
                          },
                          { label: 'Not sure', value: 'Not sure' }
                        ]}
                      />
                    </div>
                  )}
                </div>
                <div
                  className={classNames(
                    'Contact-group',
                    isUnavailable && 'is-unavailable'
                  )}
                >
                  <Textarea
                    field="message"
                    disabled={isUnavailable}
                    placeholder="Your message"
                  />
                </div>
                <input type="submit" value="Submit" onClick={submitForm} />
              </div>
            </form>
          )
        }}
      </Form>
    )
  }
}

export default ContactForm
