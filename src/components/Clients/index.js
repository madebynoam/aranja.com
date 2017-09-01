import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'
import { TweenMax, Expo } from 'gsap'
import { H2, Body1 } from '../../typography'
import './styles.css'
import androidLogo from './android.svg'
import facebookLogo from './facebook.svg'
import githubLogo from './github.svg'
import googleLogo from './google.svg'
import nestLogo from './nest.svg'
import kolibriLogo from './kolibri.svg'
import lsbLogo from './lsb.svg'
import upperquadLogo from './uq.svg'
import { EditInline } from 'tux'
import Section from '../Section'

const defaultClients = [
  {
    name: 'Facebook',
    logo: facebookLogo
  },
  {
    name: 'Github',
    logo: githubLogo
  },
  {
    name: 'Google',
    logo: googleLogo
  },
  {
    name: 'Upperquad',
    logo: upperquadLogo
  },
  {
    name: 'Android',
    logo: androidLogo
  },
  {
    name: 'Kolibri',
    logo: kolibriLogo
  },
  {
    name: 'Nest',
    logo: nestLogo
  },
  {
    name: 'Landsbankinn',
    logo: lsbLogo
  }
]

const ease = Expo.easeOut

class Clients extends Component {
  constructor() {
    super()
    this.state = {
      isVisible: false
    }
    this.animationNodes = []
    this.animationDuration = 1
  }

  componentDidMount() {
    this.animationNodes = this.componentRef.querySelectorAll('[data-animate]')
    TweenMax.set(this.animationNodes, { y: -100, autoAlpha: 0 })
  }

  onChange(isVisible) {
    if (isVisible) {
      this.setState({
        isVisible
      })
      this.handleAnimation()
    }
  }

  handleAnimation() {
    TweenMax.staggerTo(
      this.animationNodes,
      this.animationDuration,
      {
        y: 0,
        autoAlpha: 1,
        ease
      },
      0.1
    )
  }

  render() {
    const { isVisible } = this.state
    const { clients = defaultClients } = this.props
    return (
      <VisibilitySensor
        onChange={isVisible => this.onChange(isVisible)}
        active={!isVisible}
        intervalDelay={100}
        minTopValue={100}
        partialVisibility
      >
        <Section top="xlarge" bottom="large">
          <div
            className="Clients"
            ref={componentRef => {
              this.componentRef = componentRef
            }}
          >
            <H2 component="div" className="Clients-heading" bottom="xsmall">
              <EditInline format="plain" field="fields.content.clientsHeading">
                Trusted by the best
              </EditInline>
            </H2>
            <Body1
              component="div"
              className="Clients-subheading"
              bottom="medium"
            >
              <EditInline format="plain" field="fields.content.clientsText">
                We've had the pleasure of working with <br /> some of tech's
                leading companies
              </EditInline>
            </Body1>
            <ul className="Clients-list">
              {clients.map((client, index) =>
                <li className="Clients-item" key={index} data-animate>
                  <img
                    className="Clients-image"
                    src={client.logo}
                    alt={client.name}
                  />
                </li>
              )}
            </ul>
          </div>
        </Section>
      </VisibilitySensor>
    )
  }
}

Clients.propTypes = {
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      logo: PropTypes.string
    })
  )
}

export default Clients
