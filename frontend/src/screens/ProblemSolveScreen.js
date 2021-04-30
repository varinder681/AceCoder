import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import EditorScreen from "./EditorScreen";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: '100vh',
    overflowY : 'hidden',
    overflowX : 'hidden',
    [theme.breakpoints.down('sm')] :{
      height : '100%',
      minWidth : '600px',
      overflowX : 'auto'
    },
  },
  toolbarMargin: {
    paddingTop: "4em",
    height: "100%"
  },
  description: {
    backgroundColor: "#f3f3f3",
    overflowY : 'auto',
    overflowX : 'hidden',
    padding : '10px',
    height : '100%',
    [theme.breakpoints.down('sm')] : {
      height : '90vh',
      padding : '1rem'
    }
  },
  editor : {
    [theme.breakpoints.down('sm')]:{
      height : '85vh',
      minWidth : '600px',
      padding : '1rem'
    }
  }
}));

const ProblemSolveScreen = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} >
      <Grid container className={classes.toolbarMargin} direction='row'>
        <Grid container item  md={6} className={classes.description}>
          
          
        </Grid>
        <Grid container item  md={6} className={classes.editor}>
          <EditorScreen />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProblemSolveScreen;
