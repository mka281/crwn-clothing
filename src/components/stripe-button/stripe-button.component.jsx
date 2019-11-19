import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_HLeAqXnWYqPIV4xmpNJuKZyz";

  const onToken = token => {
    const chargeUserUrl =
      "https://us-central1-crwn-db-8528c.cloudfunctions.net/chargeUser";
    axios
      .get(chargeUserUrl, {
        params: {
          amount: priceForStripe,
          currency: "usd",
          source: token
        }
      })
      .then(function(response) {
        alert("Payment Successfull");
        console.log("Successs");
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
