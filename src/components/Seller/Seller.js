import React from 'react';
import BorderDecorator from '../BorderDecorator';

const SingleSeller = ({heading, copy, image}) => (
  <div className="Seller">
    <div className="Seller-wrap">
      <div className="Seller-content">
        <h1 className="Seller-heading">{heading}</h1>
        <p className="Seller-copy">{copy}</p>
      </div>
    </div>
    <div
      className="Seller-image"
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
  </div>
);

export default SingleSeller;
