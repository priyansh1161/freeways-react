import React, { PropTypes } from 'react';

import { InputGroup, FormControl, Image, Label } from 'react-bootstrap';

import PanelPrimary from '../PanelPrimary';

const BikeCard = ({ name, model, mileage, price, imageURL }) => (
  <PanelPrimary
    header={<h3>{name} <small>{model}</small><span className="spacer"/><Label bsStyle="danger">{mileage} KM/L</Label></h3>}
    footer={<InputGroup><FormControl type="number"/><InputGroup.Addon>@ {price}&#8377;/day</InputGroup.Addon></InputGroup>}>
    <Image src={imageURL} responsive/>
  </PanelPrimary>
);

BikeCard.propTypes = {
  name: PropTypes.string,
  model: PropTypes.string,
  mileage: PropTypes.string,
  price: PropTypes.string,
  imageURL: PropTypes.string,
};

export default BikeCard;