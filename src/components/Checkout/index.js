import React from 'react';

const Checkout = ({params}) => (
  <div>
    <div className="card-checkout text-center">
      <div className="box-success">
        <h2>Your unique booking number is CA2358742.</h2>
      </div>
      <h3>Thank you for the booking.</h3>
      <h4>We will contact you soon.</h4>
      <p>Please bring your valid ID proof (Aadhar Card, Voter ID Card, Passport) along with your driving license.</p>
      <div className="well">
        <p>Amount : ₹ 1350</p>
        <p>Payment Mode : Payment at Pick Up</p>
      </div>
    </div>
  </div>
);

export default Checkout;
