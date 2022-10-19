import React from 'react'
import { Box, Button,  ListItem, ListItemText, Typography } from "@mui/material";

export const CartList = ({e,handleOnclick}) => {
  return (
    <Box sx={{ mt: 1 }}>
                <ListItem >
                  <ListItemText
                    primary={e.subject}
                    secondary={
                      `${e.students}`
                    }
                  />
                  <Typography variant="body2" sx={{ fontSize: 18, fontWeight: 'bold' ,marginRight:2}}>
                    {"$" + (e.amount).toFixed(2)}
                  </Typography>
                    <Button size='small'
                      
                      color="error"
                      variant="outlined"
                      name="delete"
                      onClick={handleOnclick}
                      id={e.idPayStudents}>
                      X
                    </Button>
                </ListItem>
             </Box>
  )
}
