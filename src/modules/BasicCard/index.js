import React from 'react';

import './styles.scss';

const BasicCard = (props) => {
  return (
    <div className="card-basic">
      <img src={props.imageURL} alt={props.title}/>
      <div className="card-basic-info">
        <h6 className="text-center">{props.title}</h6>
      </div>
    </div>
  );
};

export default BasicCard;
