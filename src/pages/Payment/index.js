import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import formufitService from "../../services/formufit.service";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

function Payment(props) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    formufitService
      .getPaymentConfig()
      .then((paymentConfig) => {
        const { publishableKey } = paymentConfig.data;
        setStripePromise(loadStripe(publishableKey));
      })
      .catch((error) => {
        // Handle error here
      });
  }, []);

  useEffect(() => {
    formufitService
      .paymentIntent()
      .then((paymentIntent) => {
        const { clientSecret } = paymentIntent.data;
        setClientSecret(clientSecret);
      })
      .catch((error) => {
        // Handle error here
      });
  }, []);

  return (
    stripePromise &&
    clientSecret && (
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <CheckoutForm />
      </Elements>
    )
  );
}

export default Payment;
