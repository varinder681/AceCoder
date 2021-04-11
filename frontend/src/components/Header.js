import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  makeStyles,
  Tabs,
  Tab,
  Button,
} from "@material-ui/core";

const ElevationScroll = (props) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const useStyles = makeStyles((theme) => ({
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
  toolbarMargin: {
    ...theme.mixins.toolbar,
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
    } else if (window.location.pathname === "/about" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/login" && value !== 3) {
      setValue(3);
    }
  }, [value]);

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
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
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
