import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import androidLogo from './android.svg'
import facebookLogo from './facebook.svg'
import githubLogo from './github.svg'
import googleLogo from './google.svg'
import nestLogo from './nest.svg'
import kolibriLogo from './kolibri.svg'
import lsbLogo from './lsb.svg'
import upperquadLogo from './uq.svg'
import { withReveal } from '../../hoc/withReveal'
import './styles.css'

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

const Clients = ({ clients = defaultClients, isVisible }) => (
  <div className={classNames('Clients', isVisible && 'is-visible')}>
    <ul className="Clients-list">
      {clients.map((client, index) => (
        <li className="Clients-item" key={index}>
          <img className="Clients-image" src={client.logo} alt={client.name} />
        </li>
      ))}
    </ul>
  </div>
)

Clients.propTypes = {
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      logo: PropTypes.string
    })
  )
}

export default withReveal(Clients, { minTopValue: 200 })
