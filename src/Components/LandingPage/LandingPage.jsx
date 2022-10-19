import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../redux/actions";
import Carousel from "../News/Carousel";
import {CssBaseline, Grid , Button, Box ,Typography} from "@mui/material";
import { FiCard, FiCardMedia, FiCardContent} from "./FullImageCard";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { MainFunctions } from "./MainFunctions";
import { MoreFunctions } from "./MoreFunctions";
import { Footer } from "./Footer";



const LandingPage = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const news = useSelector((state) => state.news);

  const classes = useStyles()
  return (
    <div>
      <CssBaseline>
        <Grid container spacing={8} direction="column">
          <Grid item>
            <Box my={4} sx={{  sm: '300px', lg: "690px", marginTop: 0 }}>
              <FiCard className={classes.card}>
                <FiCardMedia
                  media="picture"
                  alt="Contemplative Reptile"
                  image="https://res.cloudinary.com/do9ddo9my/image/upload/v1663726237/ceb8o9r6fpwnblby648k.png"
                  title="Contemplative Reptile"
                />
                <FiCardContent className={classes.fiCardContent}>
                  <Typography sx={{
                    fontWeight: "bold",
                    textAlign: { xs: "center", sm: "left", lg: "left" },
                    fontSize: { xs: "1.4em", sm: "2em", lg: "3em" },
                    maxWidth: { sm: '400px', lg: "600px" }
                  }}>
                    Mejoramos la comunicación entre el colegio y las familias
                  </Typography>
                </FiCardContent>
                <Button sx={{ fontSize: "1rem", p: 2, marginLeft: '50px' }} variant="contained">
                  CONTACTENOS
                </Button>
              </FiCard>
            </Box>
          </Grid>
          <Grid item >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1.5rem",
                textAlign: "center",
                px: 3,
              }}
            >
              <Typography sx={{ fontWeight: "bold" }} variant="h3">
                Noticias y Novedades
              </Typography>
            </Box>
            <Box sx={{height:'550px'}}>
              <Carousel news={news} />
            </Box>
          </Grid>
          <Grid item >
            <MainFunctions />
          </Grid>
          <Grid item>
            <MoreFunctions />
          </Grid>
          <Grid item>
            <Footer />
          </Grid>
        </Grid>
      </CssBaseline>
    </div>
  );
};

export default LandingPage;
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    maxWidth: '100%',
    height: '800px',
  },
  fiCardContent: {
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,.15)",
    margin: '50px',
    width: '400px',

  },
  fiCardContentTextSecondary: {
    color: "rgba(255,255,255,0.78)"
  }
});