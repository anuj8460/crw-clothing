import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IjKhVSDBNiaiUvLS9Pi8vsoIkAEECz1kfyjWxJDFRSL5gSVXFAJ8GE7tFl4y4Ca1kah9fzteWGc4ECDWguQ5iaS00GLjLSsWp";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRW Clothes"
      shippingAddress
      billingAddress={false}
      image="https://sendeyo.com/en/f3eb2117da"
      description={`Your Total value is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
