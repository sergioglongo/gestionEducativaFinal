import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import swal from "sweetalert";
import axios from "axios";
import { Box, Button, Card, Divider, TextField, Typography } from "@mui/material";

export default function CheckoutForm(props) {

  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Pago correcto!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email)
      return swal("Debe ingresar un correo ", "", "warning")
    await axios.post("http://localhost:3001/payments/paydb", {
      idPayStudents: props.idPayStudents, clientSecret: props.clientSecret
    })
    swal("Pago realizado con exito", "Haga click aqui!", "success");
    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/payments",
        receipt_email: email,
      },
    })

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }
    setIsLoading(false);
  };

  return (
    <Box sx={{ mt: 10 }} >
      <Card variant="outlined" style={{ margin: "0 auto", pading: "20px", boxShadow: "1px 2px " }} sx={{ maxWidth: 700, maxHeight: 600 }} >
        <form id="payment-form" onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography
              sx={{ marginBottom: 1, marginTop: 2, fontSize: 24, fontWeight: 'bold' }}
              align="center"
              variant="outlined">
              Proceso de pago en linea
            </Typography>
            <Box sx={{ width: '95%' }}>
              <Divider />
            </Box>
            <TextField sx={{ m: 2, width: '300px' }} id="email" type="text" value={email}
              onChange={(e) => setEmail(e.target.value)} placeholder="Ingrese correo electronico" />
          </Box>
          <Box sx={{ m: 2 }}>
            <PaymentElement id="payment-element" />
          </Box>
          <Box sx={{ width: '100%', mt: 3, mb: 2, alignItems: 'center' }}>
            <Divider />
          </Box>
          <Box sx={{ m: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Button variant='contained' disabled={isLoading || !stripe || !elements} id="submit">
              {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar Ahora"}
            </Button>
            <Button variant="outlined" onClick={props.payCancel}>
              Cancelar
            </Button>
          </Box>
          {/* Show any error or success messages */}
          {message && <div id="payment-message">{message}</div>}
        </form>
      </Card>
    </Box>
  );
}