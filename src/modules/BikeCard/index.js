import React, { PropTypes } from 'react';

import './styles.css';

const BikeCard = ({ name, model, mileage, price, imageURL }) => (
  <div className="card">
    <img src={imageURL} className="img-responsive"/>
    <div className="card-info">
      <button className="btn-add">+</button>
      <h6 className="text-center">{name} <small>{model}</small></h6>
      <h6 className="text-muted text-center">&#8377;{price}</h6>
      <h6 className="text-muted text-center">{mileage} Km/L</h6>
    </div>
  </div>
);

BikeCard.propTypes = {
  name: PropTypes.string,
  model: PropTypes.string,
  mileage: PropTypes.string,
  price: PropTypes.number,
  imageURL: PropTypes.string,
};

export default BikeCard;
