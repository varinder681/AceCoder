import React, { useState, useEffect } from "react"
import { Paper, Grid, makeStyles, Button, TextField } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { register } from "../actions/userActions"

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
const RegisterScreen = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error } = userRegister;

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  },[history,userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      confirmPassword,
    };
    dispatch(register(user));
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
              Sign Up
            </Grid>
            <Grid container justify="center" item xs={12}>
              <TextField
                id="outlined-name-input"
                label="Name"
                type="text"
                variant="outlined"
                style={{ width: "100%" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid container justify="center" item xs={12}>
              <TextField
                id="outlined-email-input"
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
              <TextField
                id="outlined-confirm-password-input"
                label="Confirm Password"
                type="password"
                variant="outlined"
                style={{ width: "100%" }}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>
            <Grid container justify="center" item xs={12}>
              <Button
                disabled={loading}
                onClick={handleSubmit}
                style={{ width: "100%" }}
                variant="contained"
              >
                Sign Up
              </Button>
              {error && error.error}
            </Grid>
            <Grid container item xs={12} justify="center">
              <Button
                onClick={() => history.push("/login")}
                style={{ fontSize: "0.8rem" }}
              >
                Login Here
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default RegisterScreen;
