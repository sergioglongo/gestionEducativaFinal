import React from 'react'
import { Typography , Stack } from '@mui/material';

export const Footer = () => {
  return (
    <Stack
              justifyContent="center"
              sx={{
                backgroundColor: "#1976d2",
                width: "100%",
                height: "10rem",
                p: 3,
              }}
            >
              <Typography sx={{ textAlign: "center", color: "white" }}>
                @ Copyright 2022 Official website of the City Government of Malabon.
              </Typography>
            </Stack>
  )
}
