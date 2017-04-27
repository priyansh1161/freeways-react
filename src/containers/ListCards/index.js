import React from 'react';
import {Link} from 'react-router';
import BasicCard from '../../modules/BasicCard';

class ListCards extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="row">
        {this.props.data && this.props.data.map((curr, index) => <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          {this.props.type === 'basic' ? <Link to={`${this.props.type}/${curr._id}`}>
            <BasicCard
              title={curr.name}
              key={curr._id}
              imageURL={curr.photo || curr.photos[0]}
            />
          </Link> : <BasicCard
            title={curr.name}
            key={curr._id}
            imageURL={curr.photo || curr.photos[0]}
          />  }
        </div>)}
      </div>
    );
  }
}

export default ListCards;
