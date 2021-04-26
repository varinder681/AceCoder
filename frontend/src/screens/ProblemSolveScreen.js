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
    backgroundColor: "rgb(250, 250, 250)",
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
