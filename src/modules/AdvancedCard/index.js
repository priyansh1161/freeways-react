import React from 'react';

import './styles.scss';

const AdvancedCard = ({title, imageURL, description}) => {
  console.log(imageURL,'df');
 return <div className="card-basic">
    <img src={imageURL} alt={title}/>
    <div className="card-basic-info">
      <h6 className="text-center">{title}</h6>
      {description.split(/(\n|\r|\f)/g).map((curr, i) => <p key={i} className="text-muted">{curr}</p>)}
    </div>
  </div>
};

export default AdvancedCard;
