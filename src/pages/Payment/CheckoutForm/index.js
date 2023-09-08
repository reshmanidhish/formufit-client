import { PaymentElement } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import "./styles.scss";
import { AuthContext } from "context/auth.context";

export default function CheckoutForm(props) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { user } = useContext(AuthContext);
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
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  const formatNumber = number => {
    return (number / 100).toFixed(2).replace('.', ',');
  }

  const orderTotal = formatNumber(props.amount);
  const orderSubtotal = orderTotal
  const totalTax = 0;
  const specialOffer = 0;

  return (
    <Container className="challenges_section checkout-page">
      <div className="page-title-header_wrapper page-title-header_hasProfileLink">
        <div className="page-title-header_titleWrapper">
          <h1 className="page-title-header_title">Checkout</h1>
        </div>
      </div>

      <div className="">
        <div>
          <Row>
            <Col md="8">
              <Card className="border mb-3">
                <CardHeader>Billing Details</CardHeader>
                <CardBody>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label for="title">Name</Label>
                        <Input type="text" value={user.username} name="title" id="recipe_title" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="title">Email</Label>
                        <Input type="text" value={user.email} name="title" id="recipe_title" />
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <Card className="border">
                <CardHeader>
                  <b>Payment Method</b>
                </CardHeader>
                <CardBody>
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
            </Col>
            <Col md="4">
              <Card className="border">
                <CardHeader>Order Summary</CardHeader>
                <CardBody>
                  <CardText>
                    <Row className="mb-2">
                      <Col xs="8" className="text-left">
                        Subscription Plan
                      </Col>
                      <Col xs="4" className="text-right">
                        Enterprise
                      </Col>
                    </Row>
                  </CardText>
                  <Row className="mb-2">
                    <Col xs="8" className="text-left">
                      Order Subtotal
                    </Col>
                    <Col xs="4" className="text-right">
                        {orderSubtotal} €
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col xs="8" className="text-left">
                      Special Offer
                    </Col>
                    <Col xs="4" className="text-right">
                    {specialOffer.toFixed(2)} €
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col xs="8" className="text-left">
                      Total Tax
                    </Col>
                    <Col xs="4" className="text-right">
                    {totalTax.toFixed(2)} €
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col xs="8" className="text-left">
                      Order Total
                    </Col>
                    <Col xs="4" className="text-right">
                    {orderTotal} €
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Row>
                    <Col xs="8" className="text-left payment-total">
                      Total Payment
                    </Col>
                    <Col xs="4" className="text-right payment-total">
                    {orderTotal} €
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
