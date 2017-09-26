import React, { Component } from 'react'
import { Editable, EditInline } from 'tux'
import { Helmet } from 'react-helmet'
import classNames from 'classnames'
import { Form, Textarea, Text, Select } from 'react-form'
import ReactMap, { Layer, Feature } from 'react-mapbox-gl'
import Section from '../../components/Section'
import Hero from '../../components/Hero'
import Intro from '../../components/Intro'
import AttachmentUploader from '../../components/AttachmentUploader'
import { Body1 } from '../../typography'
import './styles.scss'

const Map = ReactMap({
  accessToken:
    'pk.eyJ1IjoiZGFiYmkiLCJhIjoiY2o4MDd5cWN1NjNoaDMydDVpbWtrNGN0eCJ9.jG-cF-k6i_S4ETdw1oQHKQ',
  scrollZoom: false
})

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

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      attachment: null
    }
    this.handleUpload = this.handleUpload.bind(this)
  }

  handleUpload(file) {
    this.setState(() => {
      return { attachment: file }
    })
  }

  render() {
    const { hero, content } = this.props

    return (
      <Editable model={content}>
        <Helmet>
          <title>Aranja Studio – Contact us</title>
          <script>UPLOADCARE_PUBLIC_KEY = '946702b78fd0f001483b'</script>
        </Helmet>
        <Section noPadding top="large" bottom="large">
          <Intro
            text="Contact us"
            description="We look forward hearing from you"
          />
        </Section>
        <Hero hero={hero} />
        <Section bottom="xlarge" top="medium">
          <Body1 component="div" className="Contact-info">
            <EditInline
              placeholder="To contact us, please fill out the form below"
              field="fields.content.headline1"
              format="raw"
            />
          </Body1>
          <Body1 component="div" className="Contact-info">
            <EditInline
              placeholder="or send us an email to <strong>hello@aranja.com</strong>"
              field="fields.content.headline2"
              format="raw"
            />
          </Body1>
          <Form
            onSubmit={values => {
              fetch('https://formspree.io/david@aranja.com', {
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(values)
              })
            }}
            defaultValues={{
              name: '',
              email: '',
              subject: '',
              budget: null,
              attachment: null,
              message: ''
            }}
            validate={({
              name,
              email,
              subject,
              budget,
              attachment,
              message
            }) => {
              return {
                name:
                  !name || !isValidName(name)
                    ? 'A name is required'
                    : undefined,
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
                        <Text
                          field="name"
                          placeholder="What should we call you?"
                        />
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
                              value: 'Project'
                            },
                            {
                              label: 'Consulting',
                              value: 'Consulting'
                            },
                            {
                              label: 'Job Application',
                              value: 'Job Application'
                            },
                            { label: 'Other', value: 'Other' }
                          ]}
                        />
                      </div>
                      {values.subject === 'Project' && (
                        <div className="Contact-item">
                          <label className="t-body2" htmlFor="budget">
                            What is your budget?
                          </label>
                          <Select
                            disabled={isUnavailable}
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
                      {values.subject === 'Job Application' && (
                        <div className="Contact-item">
                          <label
                            className="t-body2"
                            htmlFor="jobApplicationAttachment"
                          >
                            Attachment
                          </label>
                          <AttachmentUploader
                            id="jobApplicationAttachment"
                            name="jobApplicationAttachment"
                            data-tabs="file url dropbox gdrive"
                            onChange={value => setValue('attachment', value)}
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
        </Section>
        <Section bottom="large">
          <Body1 component="div" className="Contact-info">
            <EditInline
              placeholder="Want to drop in for coffee?"
              field="fields.content.bottomLine1"
              format="raw"
            />
          </Body1>
          <Body1 component="div" className="Contact-info">
            <EditInline
              placeholder="Our offices are located in <strong>Nóatún 17</strong>, 105 Reykjavík"
              field="fields.content.bottomLine2"
              format="raw"
            />
          </Body1>
          <Body1 className="Contact-info" />
        </Section>
        <Map
          center={{
            lat: 64.1426374,
            lng: -21.9057779
          }}
          zoom={[13]}
          style="mapbox://styles/mapbox/light-v9"
          containerStyle={{
            height: '60vh',
            width: '100vw'
          }}
        >
          <Layer
            type="symbol"
            id="marker"
            layout={{ 'icon-image': 'marker-15' }}
          >
            <Feature coordinates={[-21.9057779, 64.1426374]} />
          </Layer>
        </Map>
      </Editable>
    )
  }
}

export default Contact
