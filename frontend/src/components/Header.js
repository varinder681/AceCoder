import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Tabs,
  Tab,
  Button,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  appbar : {
    height : '4em',
  },
  title: {
    marginLeft: "10px",
    fontSize: "2rem",
    color : "white",
    textTransform : "none",
    '&:hover':{
      backgroundColor : "transparent"
    },
    fontFamily : "Railway",
  },
  logo: {
    height: "5rem",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    fontFamily: "Railway",
    textTransform: "none",
    fontWeight: "700",
    fontSize: "1rem",
    minWidth: 10,
    marginLeft: "25px"
  },
  login : {
    marginRight : "25px",
    marginLeft : "25px",
    borderRadius : "15px",
    '&:hover' : {
      color : "white"
    }
  }
}));

const Header = ({ children }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/editor" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/create-problem" && value !== 2) {

    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/login" && value !== 4) {
      setValue(4);
    }
  }, [value]);

  return (
    <>

        <AppBar elevation={0} className={classes.appbar} position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button onClick={()=>setValue(0)} component={Link} to="/" className={classes.title}>Ace Coder</Button>
            <Tabs
              value={value}
              onChange={(e, newValue) => setValue(newValue)}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab
                className={classes.tab}
                label="Home"
                component={Link}
                to="/"
              />
              <Tab
                className={classes.tab}
                label="Editor"
                component={Link}
                to="/editor"
              />
              <Tab
                className={classes.tab}
                label="Create Problem"
                component={Link}
                to="/create-problem"
              />
              <Tab
                className={classes.tab}
                label="About Us"
                component={Link}
                to="/about"
              />
            </Tabs>
            <Button
              
              variant="contained"
              component={Link}
              to="/login"
              color="secondary"
              className={classes.login}
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
    </>
  );
};

export default Header;
