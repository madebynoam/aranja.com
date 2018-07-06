import React, { Component } from "react";
import Service from "./Service";
import { EditModal } from "tux";

const Services = ({ services }) => (
  <div className="Services">
    {services.items
      .reverse()
      .sort((a, b) => a.fields.index - b.fields.index)
      .map((service, index) => (
        <EditModal model={service} key={`modal_${service.fields.index}`}>
          <Service
            heading={service.fields.title}
            image={service.fields.image}
            copy={service.fields.text}
            index={index}
          />
        </EditModal>
      ))}
  </div>
);

export default Services;
