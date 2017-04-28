import React from 'react';
import {Link} from 'react-router';
import BasicCard from '../../modules/BasicCard';

class ListCards extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="row">
        { this.props.data && this.props.data.map((curr, index) => {
           try{
            var img = curr.photo  || curr.photos[0];
          } catch (e){
             console.log(e);
             img = '';
           }
          return <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            {this.props.type !== 'basic' ? <Link to={`${this.props.type}/${curr._id}`}>
              <BasicCard
                title={curr.name}
                key={curr._id}
                imageURL={img}
              />
            </Link> : <BasicCard
              title={curr.title || curr.name}
              key={curr._id}
              imageURL={img}
            /> }
          </div>
        })}
      </div>
    );
  }
}


export default ListCards;
