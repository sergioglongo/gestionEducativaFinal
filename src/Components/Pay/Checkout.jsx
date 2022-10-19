import React from 'react'
import { Box, Button, Divider, Grid, Typography } from "@mui/material";

export const Checkout = ({suma, cart, payCart}) => {
  return (
    <Grid sx={{ display: 'flex', flexDirection: 'column', p: 2 }} xs={12} sm={6} item>
      <Typography
        sx={{ marginBottom: 1, fontSize: 24, fontWeight: 'bold' }}
        align="center"
        variant="outlined">
        Resumen de Pago
      </Typography>
      <Divider />
      <Box sx={{ display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
        <Typography
          sx={{ margin: 1, fontSize: 16, fontWeight: 'bold' }}
          align="center"
          variant="outlined">
          Cant. Items
        </Typography>
        <Typography
          sx={{ marginBottom: 1, marginTop: 1, fontSize: 16 }}
          variant="outlined">
          : {cart.cart.length}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
        <Typography
          sx={{ marginBottom: 1, fontSize: 24, fontWeight: 'bold' }}
          align="center"
          variant="outlined">
          Total
        </Typography>
        <Typography
          sx={{ marginBottom: 1, fontSize: 24 }}
          variant="outlined">
          : ${suma}
        </Typography>
      </Box>
      <Button
        align="center"
        variant='contained'
        name="pay"
        sx={{ width: '70%', alignSelf: 'center' }}
        onClick={(e) => payCart(e)}
      >
        Realizar Pago
      </Button>
      <Box sx={{ marginTop: 2, alignSelf: 'center' }}>
        <img
          src="https://i0.wp.com/www.toyorigin.com/wp-content/uploads/2018/08/stripe_secure.png?fit=1024%2C210&ssl=1"
          alt="img"
          width="200"
        />
      </Box>
    </Grid>

  )
}
