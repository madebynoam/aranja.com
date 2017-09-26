import React, { Component } from 'react'
import { Editable, EditInline } from 'tux'
import { Helmet } from 'react-helmet'
import ReactMap, { Layer, Feature } from 'react-mapbox-gl'
import Section from '../../components/Section'
import Hero from '../../components/Hero'
import Intro from '../../components/Intro'
import ContactForm from './ContactForm'
import { Body1 } from '../../typography'
import './styles.scss'

const Map = ReactMap({
  accessToken:
    'pk.eyJ1IjoiZGFiYmkiLCJhIjoiY2o4MDd5cWN1NjNoaDMydDVpbWtrNGN0eCJ9.jG-cF-k6i_S4ETdw1oQHKQ',
  scrollZoom: false
})

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sender: null,
      sent: false,
    }
  }

  handleSending(sender) {
    console.log(sender)
    this.setState(prevState => {
      return {
        sent: !prevState.sent,
        sender,
      }
    })
  }

  render() {
    const { hero, content } = this.props
    const { sent, sender } = this.state

    return (
      <Editable model={content}>
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
          {!sent && [
            <Body1 component="div" className="Contact-info" key="headline1">
              <EditInline
                placeholder="To contact us, please fill out the form below"
                field="fields.content.headline1"
                format="raw"
              />
            </Body1>,
            <Body1 component="div" className="Contact-info" key="headline2">
              <EditInline
                placeholder="or send us an email to <strong>hello@aranja.com</strong>"
                field="fields.content.headline2"
                format="raw"
              />
            </Body1>
          ]}
          {!sent && <ContactForm reportSendStatus={sender => this.handleSending(sender)} />}
          {sent && sender && <Body1 className="Contact-info">Thank you for your message, {sender}! We'll be in touch shortly :)</Body1>}
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
