import React from 'react';
import {Link} from 'react-router';
import BasicCard from '../../modules/BasicCard';

class ListCards extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.data && this.props.data.map(curr => <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <Link to={`${this.props.type}/${curr._id}`}>
            <BasicCard
              title={curr.name}
              key={curr._id}
              imageURL={curr.photo}
            />
          </Link>
        </div>)}
      </div>
    );
  }
}

export default ListCards;
