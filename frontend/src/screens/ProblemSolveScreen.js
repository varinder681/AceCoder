import React from "react";
import {useSelector} from 'react-redux'
import { Grid, Paper,LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import ProblemDescription from '../components/ProblemDescription'

import EditorScreen from "./EditorScreen";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: '100vh',
    overflowY : 'hidden',
    overflowX : 'hidden',
    [theme.breakpoints.down('sm')] :{
      height : '100%',
      minWidth : '350px',
      overflowX : 'auto'
    },
  },
  toolbarMargin: {
    paddingTop: "4em",
    height: "100%"
  },
  description: {
    backgroundColor: "#FFF",
    overflowY : 'auto',
    overflowX : 'hidden',
    padding : '10px',
    height : '100%',
    [theme.breakpoints.down('sm')] : {
      
      padding : '1rem',
    }
  },
  editor : {
    [theme.breakpoints.down('sm')]:{
      height : '85vh',
      minWidth : '350px',
      padding : '1rem'
    }
  }
}));

const ProblemSolveScreen = (props) => {
  const classes = useStyles();
  
  const getProblem = useSelector(state => state.getProblem)
  const {loading, error,problem} = getProblem


  return (
    <Paper className={classes.paper} >
      <Grid container className={classes.toolbarMargin} direction='row'>
        {loading && <Grid item xs={12}>
          <LinearProgress />
        </Grid>}
        
        <Grid container item  md={6} className={classes.description} alignItems='flex-start'>
          <ProblemDescription {...props} />
        </Grid>
        <Grid container item  md={6} className={classes.editor}>
          {!loading && <EditorScreen problem={problem} />}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProblemSolveScreen;
