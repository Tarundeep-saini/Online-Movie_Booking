import React from 'react';
import { Link } from 'react-router-dom';
import './billing_css.css';

const Billing = () => {
  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form>
        <label htmlFor="cardNumber">Card Number</label>
        <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" />

        <label htmlFor="expiryDate">Expiry Date</label>
        <input type="text" id="expiryDate" placeholder="MM/YY" />

        <label htmlFor="cvv">CVV</label>
        <input type="text" id="cvv" placeholder="123" />

        <label htmlFor="name">Cardholder Name</label>
        <input type="text" id="name" placeholder="John Doe" />

        <button type="submit">Pay Now</button>
        <Link to={`/`} className="home" > Home </Link>  
      </form>
    </div>
  );
};

export default Billing;
