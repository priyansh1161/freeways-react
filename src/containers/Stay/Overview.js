import React from 'react';
import { Glyphicon } from 'react-bootstrap';

function renderStars(value) {
  let stars = [];
  for (let v = 0; v < Math.floor(value); v++) {
    stars.push(<Glyphicon glyph="star"/>);
  }
  if (value - Math.floor(value) >= 0.5) {
    stars.push(<Glyphicon glyph="star"/>);
  }
  const l = 5 - stars.length;
  for (let v = 0; v < l; v++) {
    stars.push(<Glyphicon glyph="star-empty"/>);
  }
  return stars;
}

function generateAmenities(facilities){
  const dictionary = {
    kitchen : <div><i className="fa fa-cutlery"/>
      <span>Kitchen</span></div>,
    wifi : <div><i className="fa fa-wifi"/>
      <span>Wireless Internet</span></div>,
    ac : <div><i className="fa fa-snowflake-o"/>
      <span>Air Conditioning</span></div>,
    tv : <div><i className="fa fa-television"/>
      <span>TV</span></div>
  };
  return facilities.map(curr => dictionary[curr]); //todo fix its styling

}

const Overview = ({stay}) =>{

  return (
    <div>
      <h2 className="text-center">{stay.name}</h2>
      <div className="box-support">
        <p className="text-muted">{ `${stay.location.addr}, ${stay.location.city}` }</p>
        <div className="stars">
          {renderStars(stay.stars)}
        </div>
        <p>{stay.reviews.length} reviews</p>
      </div>
      <div className="amenities">
        <div>
          <i className="fa fa-home"/>
          <span className="text-muted">{stay.stayType}</span>
        </div>
        <div>
          <i className="fa fa-users"/>
          <span className="text-muted">{stay.space.rooms} Rooms</span>
        </div>
        <div>
          <i className="fa fa-bed"/>
          <span className="text-muted">{stay.space.beds} Beds</span>
        </div>
      </div>
      <h3>About this listing</h3>
      <p>{stay.listing}</p>
      <div className="info">
        <div>
          <strong>The space</strong>
          <div>
            Accommodates: {stay.space.accommodates}<br/>
            Bathrooms: {stay.space.bathrooms}<br/>
            Bedrooms: {stay.space.rooms}<br/>
            Beds: {stay.space.beds}<br/>
            <a href="#">House Rules</a>
          </div>
          <div>
            Check In: {stay.space.checkIn}<br/>
            Check Out: {stay.space.checkOut}<br/>
            Property type: {stay.space.propertyType}<br/>
            Room type: {stay.stayType}<br/>
          </div>
        </div>
        <div>
          <strong>Amenities</strong>
          <div>
            {stay.facilities.slice(0,stay.facilities.length/2).map(facility => (
              <div>{facility}</div>
            ))}
          </div>
          <div>
            {stay.facilities.slice(stay.facilities.length/2, stay.facilities.length).map(facility => (
              <div>{facility}</div>
            ))}
          </div>
        </div>
        <div>
          <strong>Prices</strong>
          <div className="fuller"><span>Extra People: No Charge</span></div>
        </div>
        <div>
          <strong>Description</strong>
          <div className="fuller">
            <strong>The space</strong>
            <br/>
            {stay.description.split(/(\n|\r|\f)/g).map((curr, i) => <p key={i}>{curr}</p>)}
          </div>
        </div>
        {stay.space.rules && <div>
          <strong>House Rules</strong>
          <div className="fuller">
            <p></p>
            <hr/>
            {stay.space.rules.split(/(\n|\r|\f)/g).map(curr => <p>{curr}</p>)}
          </div>
        </div> }
        <div>
          <strong>Cancellations</strong>
          <div className="fuller">
            <strong>Strict</strong>
            <br/>
            <p>Cancel up to 7 days before your trip and get a 50% refund plus service fees back.</p>

          </div>
        </div>
        <div>
          <strong>Availability</strong>
          <div>The minimum night stay for this listing <strong>varies</strong>.</div>
          <div><a href="#">Add your travel dates</a> to see more details</div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
