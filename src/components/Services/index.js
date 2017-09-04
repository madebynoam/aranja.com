import React, { Component } from 'react'
import Service from './Service'
import { EditModal } from 'tux'

class Services extends Component {
  render() {
    const { services } = this.props

    return (
      <div className="Services">
        {services.items.reverse().sort((a, b) => a.fields.index - b.fields.index).map(service =>
          <EditModal model={service} key={`modal_${service.fields.index}`}>
            <Service
              key={`service_${service.fields.index}`}
              heading={service.fields.title}
              image={service.fields.image && `${service.fields.image.fields.file.url}?w=1000`}
              copy={service.fields.text}
            />
          </EditModal>,
        )}
      </div>
    )
  }
}

export default Services
