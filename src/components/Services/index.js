import React from 'react';
import Service from './Service';
import Section from '../Section';
import { EditModal } from 'tux'

class Services extends React.Component {
  render() {
    const {services} = this.props;
    return (
      <Section>
        <div className="Services">
          {services.items.map((service, i) => (
            <EditModal model={service} key={i}>
              <Service
                key={`service_${i}`}
                heading={service.fields.title}
                image={service.fields.image.asset.file.url}
                copy={service.fields.text}
              />
            </EditModal>
          ))}
        </div>
      </Section>
    );
  }
}

export default Services;
