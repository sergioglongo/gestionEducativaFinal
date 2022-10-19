import { Box,  Card, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import style from "./cart.module.css";
import { CartList } from "./CartList";
import { Checkout } from "./Checkout";
import { deletePayFromCart } from "./actionsPay";
import { useDispatch } from 'react-redux';

function CartTotal(props) {
  let initialState = {
    cart: props.cart,
    pay: false,
  };
  const dispatch = useDispatch()

  const [cart, setCart] = useState(initialState);

  function payCart() {
    setCart({ ...cart, pay: true })
  }

  function payCancel() {
    setCart({ ...cart, pay: false })
  }

  function handleOnclick(e) {
    e.preventDefault();
    setCart({ ...cart, cart: cart.cart.filter((d) => parseInt(d.idPayStudents) !== parseInt(e.target.id)) });
    dispatch(deletePayFromCart(parseInt(e.target.id)))
  }
  //// si se queda CART en cero, se retorna a pagos pendientes
  useEffect(() => {
    if (!cart.cart[0]) props.onClickTotalCart();
  }, [cart.cart, props]);

  let suma = 0;
  cart.cart.forEach((element) => {
    suma = suma + element.amount;
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {cart.pay ? (
        <Cart suma={suma} idPayStudents={cart.cart.map((t) => t.idPayStudents)} payCancel={payCancel} />
      ) : (
        <div className={style.container}>
          <Card sx={{ margin: 2, maxWidth: 600 }}>
            <Grid sx={{ display: 'flex', flexDirection: 'column', p: 1 }} xs={12} sm={6} item>
              <Typography
                sx={{ marginBottom: 1, fontSize: 24, fontWeight: 'bold', alignSelf: 'center' }}
                variant="outlined">
                Conceptos a pagar
              </Typography>
            </Grid>
            <Divider />
            {cart.cart?.map((e) => (
              <Box key={e.idPayStudents}>
                <CartList e={e} handleOnclick={handleOnclick} />
                <Divider />
              </Box>
            ))}
          </Card>
          <Card sx={{ marginTop: 2 }}>
            <Checkout suma={suma} cart={cart} payCart={payCart} />
          </Card>
        </div>
      )
      }
    </Box >
  );
}

export default CartTotal;
