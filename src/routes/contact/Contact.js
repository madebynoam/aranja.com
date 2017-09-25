import React, { Component } from 'react'
import { Editable } from 'tux'
import { Helmet } from 'react-helmet'
import classNames from 'classnames'
import ReactMap, { Layer, Feature, Popup } from 'react-mapbox-gl'
import Section from '../../components/Section'
import Hero from '../../components/Hero'
import Intro from '../../components/Intro'
import { H1, H2, H3, Body1, Body2 } from '../../typography'
import './styles.scss'

const Map = ReactMap({
  accessToken:
    'pk.eyJ1IjoiZGFiYmkiLCJhIjoiY2o4MDd5cWN1NjNoaDMydDVpbWtrNGN0eCJ9.jG-cF-k6i_S4ETdw1oQHKQ',
  scrollZoom: false
})

const availableSubjects = ['project', 'consulting', 'job application', 'other']
class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sent: false,
      selectedSubject: 'project',
      senderName: '',
      senderEmail: '',
    }

    this.onChangeSubject = this.onChangeSubject.bind(this)
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
  }

  onChangeSubject(event) {
    this.setState({selectedSubject: event.target.value})
  }

  onChangeName(event) {
    this.setState({senderName: event.target.value})
  }

  onChangeEmail(event) {
    this.setState({senderEmail: event.target.value})
  }

  render() {
    const { hero } = this.props
    const { senderName, senderEmail, selectedSubject } = this.state
    const isUnavailable = !senderName || !senderEmail

    return (
      <Editable>
        <Helmet>
          <title>Aranja Studio – Contact us</title>
        </Helmet>
        <Section noPadding top="large" bottom="large">
          <Intro
            text="Contact us"
            description="We look forward hearing from you"
          />
        </Section>
        <Hero hero={hero} />
        <Section bottom="xlarge" top="medium">
          <Body1 className="Contact-info">To contact us, please fill out the form below</Body1>
          <Body1 className="Contact-info">or send us an email to <strong>team@aranja.com</strong></Body1>
          <div className="Contact">
            <div className="Contact-group">
              <div className="Contact-item">
                <label className="t-body2" htmlFor="name">
                  Your name
                </label>
                <input id="name" type="text" value={senderName} onChange={this.onChangeName} />
              </div>
              <div className="Contact-item">
                <label className="t-body2" htmlFor="email">
                  Your email
                </label>
                <input id="email" type="email" value={senderEmail} onChange={this.onChangeEmail}/>
              </div>
            </div>
            <div className={classNames('Contact-group', isUnavailable && 'is-unavailable' )}>
              <div className="Contact-item">
                <label className="t-body2" htmlFor="subject">
                  What are you contacting us regarding?
                </label>
                <select disabled={isUnavailable} id="subject" value={selectedSubject} onChange={this.onChangeSubject}>
                  {availableSubjects.map(subject => <option key={subject}>{subject}</option>)}
                </select>
              </div>
              {selectedSubject === 'project' && (
                <div className="Contact-item">
                  <label className="t-body2" htmlFor="budget">
                    What is your budget?
                  </label>
                  <select disabled={isUnavailable} id="budget">
                    <option>Less than $10,000.00</option>
                    <option>Between $10,000.00 and $30,000.00</option>
                    <option>Over $30,000.00</option>
                    <option>I'm not sure</option>
                  </select>
                </div>
              )}
              {selectedSubject === 'job application' && (
                <div className="Contact-item">
                  <label className="t-body2" htmlFor="jobApplication">
                    Attachments
                  </label>
                  <input id="jobApplication" type="file" />
                </div>
              )}
            </div>
            <div className={classNames('Contact-group', isUnavailable && 'is-unavailable' )}>
            <textarea disabled={isUnavailable} placeholder="Your message" />
            </div>
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
          </div>
        </Section>
        <Section bottom="large">
          <Body1 className="Contact-info">Want to drop in for coffee?</Body1>
          <Body1 className="Contact-info">Our offices are located in <strong>Nóatún 17</strong>, 105 Reykjavík</Body1>
          <Body1 className="Contact-info"></Body1>
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
