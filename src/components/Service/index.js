import React from 'react';
import './styles.css';

const Service = ({}) => (
  <div className="Services">
    <div className="Service">
      <div className="Service-content">
        <p className="Service-number">01</p>
        <h1 className="Service-heading">Application <br /> Development</h1>
        <a href="#" className="Service-link">See details</a>
      </div>
      <div className="Service-image" />
    </div>
    <div className="Service">
      <div className="Service-content">
        <p className="Service-number">02</p>
        <h1 className="Service-heading">Technical <br /> Consultancy</h1>
        <a href="#" className="Service-link">See details</a>
      </div>
      <div className="Service-image" />
    </div>
    <div className="Service">
      <div className="Service-content">
        <p className="Service-number">03</p>
        <h1 className="Service-heading">Performance <br /> Engineering</h1>
        <a href="#" className="Service-link">See details</a>
      </div>
      <div className="Service-image" />
    </div>
  </div>
);

export default Service;
