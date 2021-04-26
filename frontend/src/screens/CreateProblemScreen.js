import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import TextEditor from '../components/TextEditor/TextEditor';
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
    backgroundColor: "white",
    overflowY : 'auto',
    overflowX : 'hidden',
    height : '100%'
  },
  editor : {
    
  }
}));

const CreateProblemScreen = () => {
  const classes = useStyles();


  return (
    <Paper className={classes.paper} >
      <Grid container className={classes.toolbarMargin} direction='row'>
        <Grid container item  xs={6} className={classes.description}>
          
          <TextEditor />
        </Grid>
        <Grid container item  xs={6} className={classes.editor}>
          <EditorScreen />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CreateProblemScreen;
