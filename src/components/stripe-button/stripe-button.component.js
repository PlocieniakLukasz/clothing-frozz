import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HHRAWK5C5QsEoLoEMirYXLB6SexEvIh9PgclggPV3ZnbiTsDecPsBb6Nn4MGMUbFFDknvtenevns7SfK3n2YUSF00aqhqKgbq";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Frozz Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
