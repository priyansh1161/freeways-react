import React from 'react';
import BasicCard from '../../modules/BasicCard';

class ListCards extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <BasicCard
            title="Los Angeles"
            imageURL="https://a0.muscache.com/im/pictures/41671788/112cfec6_original.jpg?aki_policy=medium"
          />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <BasicCard
            title="Paris"
            imageURL="https://a0.muscache.com/im/pictures/41671788/112cfec6_original.jpg?aki_policy=medium"
          />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <BasicCard
            title="Tokyo"
            imageURL="https://a0.muscache.com/im/pictures/41671788/112cfec6_original.jpg?aki_policy=medium"
          />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <BasicCard
            title="London"
            imageURL="https://a0.muscache.com/im/pictures/41671788/112cfec6_original.jpg?aki_policy=medium"
          />
        </div>
      </div>
    );
  }
}

export default ListCards;
