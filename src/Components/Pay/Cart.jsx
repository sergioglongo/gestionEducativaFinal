import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe("pk_test_51LhTr6LwTZHQim7FO5ROXhaZ641osNIWSjZpqdDTvRwNGKzqKpgsDMmHrWcTrWUs1OJhkKnxZ1QC6ubteBmoGU2000Fj2sAwZe");

export default function Cart(props) {

  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:3001/payments/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount:  props.suma }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [props.suma]);

  const appearance = {
    theme: 'stripe',
  };
  const options = { //datos requeridos para crear instancia de pasarela de pago
    clientSecret,
    appearance,
  };
  //creada una instancia de pago en stripe, renderiza pasarela de pago
  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}> 
          <CheckoutForm idPayStudents = {props.idPayStudents} clientSecret={clientSecret} payCancel={props.payCancel}/>
        </Elements>
      )}
    </div>
  );
}