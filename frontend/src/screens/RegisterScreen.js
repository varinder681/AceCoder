import React from "react";
import { Paper, Grid, makeStyles, Button,TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "100vh",
  },
  container: {
    paddingTop: "4rem",
    height: "100%",
    // backgroundColor : '#000'
  },
  card: {
    padding: "2rem",
  },
  input : {
      
  }
}));
const RegisterScreen = () => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper}>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.container}
        >
          <Grid container spacing={2} item xs={4} className={classes.card}>
            <Grid container justify="center" item xs={12}>
              Sign Up
            </Grid>
            <Grid container justify="center" item xs={12}>
              <TextField
                id="outlined-password-input"
                label="Email Address"
                type="text"
                autoComplete="current-password"
                variant="outlined"
                style={{width : '100%'}}
              />
            </Grid>
            <Grid container justify="center" item={12}>
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                style={{width : '100%'}}
              />
            </Grid>
            <Grid container justify="center" item={12}>
              <Button style={{ width: "100%" }} variant="contained">
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default RegisterScreen;
