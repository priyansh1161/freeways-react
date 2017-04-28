import React from 'react';
//todo fix it;
const Checkout = ({params}) => (
  <div>
    <div className="card-checkout text-center">
      <div className="box-success">
        <h2>Your unique booking number is {CA2358 + Math.floor(Math.random()%100)}.</h2>
      </div>
      <h3>Thank you for the booking.</h3>
      <h4>We will contact you soon.</h4>
      <p>Please bring your valid ID proof (Aadhar Card, Voter ID Card, Passport) along with your driving license.</p>
      <div className="well">
        <p>Payment Mode : Payment at Pick Up</p>
      </div>
    </div>
  </div>
);

export default Checkout;
