import React from 'react'
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";

export const CartItem = ({e, handleOnclick}) => {
    
    return (
    <Box sx={{ mt: 1 }}>
    <Card
      variant="outlined"
      style={{ margin: "0 auto", pading: "20px 5px" }}
      sx={{ maxWidth: 500 }}
    >
      <CardContent>
        <Grid xs={12} sm={6} sx={{ m: 1 }} item>
          <Typography align="center" gutterBottom variant="h5">
            {`${e?.students}`}
          </Typography>
        </Grid>

        <Divider />

        <Grid xs={12} sm={6} sx={{ m: 1 }} item>
          <Typography gutterBottom variant="h5">
            Asunto
          </Typography>
          <Typography gutterBottom variant="h6">
            {e?.subject}
          </Typography>
        </Grid>
        <Grid sx={{ m: 1, flexGrow: 1 }}>
          <Box xs={12} sm={6} item>
            <Typography gutterBottom variant="h5"></Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={6} sx={{ m: 1 }} item>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="baseline"
          >
            <CardActions>
              <Typography gutterBottom variant="h6">
                ${e.amount}
              </Typography>
            </CardActions>
            <Grid>
              <Button
                size="large"
                color="error"
                variant="outlined"
                name="delete"
                onClick={ev=>handleOnclick(ev)}
                id={e.idPayStudents}
              >
                Eliminar{" "}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Box>
  )
}
