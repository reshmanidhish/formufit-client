import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import formufitService from "../../services/formufit.service";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useNavigate, useParams } from "react-router-dom";

function Payment(props) {
  let { id } = useParams();
  const [amount, setAmount] = useState(0);
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (id && id !== ":id") {
      formufitService
        .getPaymentConfig()
        .then((paymentConfig) => {
          const { publishableKey } = paymentConfig.data;
          setStripePromise(loadStripe(publishableKey));
        })
        .catch((error) => {
          // Handle error here
        });

      formufitService
        .paymentIntent(id)
        .then((paymentIntent) => {
          const { clientSecret, amount } = paymentIntent.data;
          setAmount(amount)
          setClientSecret(clientSecret);
        })
        .catch((error) => {
          // Handle error here
        });
    } else {
      navigate(`/dashboard`)
    }
  }, []);

  return (
    stripePromise &&
    clientSecret && (
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <CheckoutForm amount={amount}/>
      </Elements>
    )
  );
}

export default Payment;
