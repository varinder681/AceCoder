import React, { useState, useEffect } from "react";
import { Paper, Grid, makeStyles, Button, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../actions/userActions";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "100vh",
    minWidth: "350px",
  },
  container: {
    paddingTop: "4rem",
    height: "100%",
    // backgroundColor : '#000'
  },
  card: {
    padding: "2rem",
  },
  input: {},
}));
const LoginScreen = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [userInfo, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(login(user));
  };

  return (
    <>
      <Paper className={classes.paper}>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.container}
        >
          <Grid
            container
            spacing={2}
            item
            xs={10}
            sm={8}
            md={6}
            lg={4}
            className={classes.card}
          >
            <Grid container justify="center" item xs={12}>
              Sign In
            </Grid>

            <Grid container justify="center" item xs={12}>
              <TextField
                id="outlined-email-address-input"
                label="Email Address"
                type="email"
                variant="outlined"
                style={{ width: "100%" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid container justify="center" item xs={12}>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                style={{ width: "100%" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid container justify="center" item xs={12}>
              <Button
                disabled={loading}
                onClick={handleSubmit}
                style={{ width: "100%" }}
                variant="contained"
              >
                Sign In
              </Button>
              {error && error.error}
            </Grid>
            <Grid container item xs={12} justify='center'>
              <Button onClick={()=>history.push('/register')} style={{ fontSize: "0.8rem" }}>Register Here</Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default LoginScreen;
