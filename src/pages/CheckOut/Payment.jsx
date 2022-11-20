import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import apiClient from '../../api/client.js';
const StripeKey =
  'pk_test_51LdzQTHBKpq9z4dN3jIUInc3XPaCqQeR6pc7g22DE4pCwe7hoE9wbc9CTupSBfQ7Tw2SH70sJFedid26FyomtSZ500WFwcTm4Z';
function Payment() {
  const OnToken = (token) => {
    apiClient.post('/checkout/');
    console.log(token);
  };
  return (
    <div className="position-middle">
      <h1 className="display-3 ">Payment</h1>
      <button className="btn  bg-secondary text-white ">
        <StripeCheckout
          stripeKey={StripeKey}
          token={OnToken}
          name="BIOREPERE"
          image={
            'https://i.pinimg.com/736x/27/97/13/27971377ef8ea89557d558eb4632f372.jpg'
          }
          shippingAddress={false}
          amount={20 * 100}
          billingAddress={false}
        ></StripeCheckout>
      </button>
    </div>
  );
}

export default Payment;
