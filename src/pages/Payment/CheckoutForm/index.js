import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import {

  Card,
  CardBody,
  Container,

} from "reactstrap";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <>
      <Container className="challenges_section">
        <div className="page-title-header_wrapper page-title-header_hasProfileLink">
          <div className="page-title-header_titleWrapper">
            <h1 className="page-title-header_title">Create Recipe</h1>
          </div>
        </div>
        <h4 className="workouts_subtitle">
          Provide informations for creating diet recipe
        </h4>

        <div className="">
          <div>
            <Card className="card_container">
              <CardBody className="card_content">
                <form id="payment-form" onSubmit={handleSubmit}>
                  <PaymentElement id="payment-element" />
                  <button
                    disabled={isProcessing || !stripe || !elements}
                    id="submit"
                  >
                    <span id="button-text">
                      {isProcessing ? "Processing ... " : "Pay now"}
                    </span>
                  </button>
                  {/* Show any error or success messages */}
                  {message && <div id="payment-message">{message}</div>}
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}
