import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import TextEditor from './TextEditor/TextEditor';


const useStyles = makeStyles((theme) => ({
  paper: {
    overflowY : 'hidden',
    overflowX : 'hidden',
    minWidth : '600px',
    height : '100vh',
  },
  toolbarMargin: {
    height: "100%",
  },
  description: {
    backgroundColor: "white",
    overflowY : 'auto',
    overflowX : 'hidden',
    height : '100%',

  },
  
}));

const ProblemDescription = () => {
  const classes = useStyles();


  return (
    <Paper className={classes.paper} >
      <Grid container className={classes.toolbarMargin} direction='row'>
        <Grid container item  xs={12} className={classes.description}>
          <TextEditor />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProblemDescription;
