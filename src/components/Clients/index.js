import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { TweenMax, Expo } from 'gsap'
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

const clients = [
  {
    name: 'Facebook',
    logo: facebookLogo,
  },
  {
    name: 'Github',
    logo: githubLogo,
  },
  {
    name: 'Google',
    logo: googleLogo,
  },
  {
    name: 'Upperquad',
    logo: upperquadLogo,
  },
  {
    name: 'Android',
    logo: androidLogo,
  },
  {
    name: 'Kolibri',
    logo: kolibriLogo,
  },
]

const ease = Expo.easeOut

class Clients extends React.Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
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
        isVisible,
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
        ease,
      },
      0.1,
    )
  }

  render() {
    const { isVisible } = this.state
    return (
      <VisibilitySensor
        onChange={isVisible => this.onChange(isVisible)}
        active={!isVisible}
        intervalDelay={100}
        minTopValue={100}
        partialVisibility
      >
        <div
          className="Clients"
          ref={componentRef => {
            this.componentRef = componentRef
          }}
        >
          <h1 className="Clients-heading">
            <EditInline field="fields.content.clientsHeading">Selected clients</EditInline>
          </h1>
          <h2 className="Clients-subheading">
            <EditInline field="fields.content.clientsText">
              We've had the pleasure of working with <br /> some of tech's leading companies
            </EditInline>
          </h2>
          <ul className="Clients-list">
            {clients.map((client, index) =>
              <li className="Clients-item" key={index} data-animate>
                <img className="Clients-image" src={client.logo} alt={client.name} />
              </li>,
            )}
          </ul>
        </div>
      </VisibilitySensor>
    )
  }
}

export default Clients
