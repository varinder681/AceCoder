import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import EditorScreen from "./EditorScreen";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "100vh",
    overflowY : 'hidden',
    overflowX : 'hidden'
  },
  toolbarMargin: {
    paddingTop: "4em",
    height: "100%",
  },
  description: {
    backgroundColor: "green",
    overflowY : 'auto',
    overflowX : 'hidden',
    padding : '10px',
    height : '100%'
  },
  editor : {
    
  }
}));

const ProblemSolveScreen = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} >
      <Grid container className={classes.toolbarMargin} direction='row'>
        <Grid container item xs={6} className={classes.description}>
          
          {[1,2,3,4,4,5,5,3,3,3,3,3,3,43,4,3,43,23,3,2,3,2,3,23,2,2].map((value,id) => (
          <h3 key={id}>Calculate the sum of array elements</h3>

          ))}
        </Grid>
        <Grid container item xs={6} className={classes.editor}>
          <EditorScreen />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProblemSolveScreen;
