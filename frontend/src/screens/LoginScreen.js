import React from "react";
import { Container, makeStyles, TextField, Button, Checkbox } from "@material-ui/core";


import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyle = makeStyles((theme) => ({
  container: {
    minHeight: "91vh",
    minWidth: "100vw",
    position: "relative",
    padding: 0,
    textAlign: "center",
  },
  form: {
    msTransformOrigin: "translate(50,50)",
    height: "25rem",
    width: "35vw",
    border: "1px solid transparent",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    padding: "2rem",
  },
  
}));

const LoginScreen = () => {
  const classes = useStyle();

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container className={classes.container}>
      <Container className={classes.form}>
        <form className={classes.root} noValidate autoComplete="off">
        <InputLabel style={{fontSize : "2rem"}} >Sign In</InputLabel>
          <TextField id="outlined-full-width" style={{ margin: 8 }} fullWidth label="Username" variant="outlined" />
          <FormControl style={{ margin: 8 }} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <label style={{fontSize: "1rem",width : "100%", textAlign : "left", margin : "8px"}} ><Checkbox /> Remember Me</label>
        
        <Button variant="contained" fullWidth color="primary" style={{margin : "8px"}} >Sign In</Button>
        </form>
      </Container>
    </Container>
  );
};

export default LoginScreen;
