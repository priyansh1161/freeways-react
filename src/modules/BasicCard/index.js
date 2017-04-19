import React from 'react';

import './styles.scss';

const BasicCard = ({title, imageURL}) => (
  <div className="card-basic">
    <img src={imageURL} alt={title}/>
    <div className="card-basic-info">
      <h6 className="text-center">{title}</h6>
    </div>
  </div>
);

export default BasicCard;
