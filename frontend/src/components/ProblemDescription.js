import React,{useState} from "react";
import {useDispatch} from 'react-redux'
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import {handleTitleChange} from '../actions/createProblemActions'

import TextEditor from './TextEditor/TextEditor';


const useStyles = makeStyles((theme) => ({
  paper: {
    overflowY : 'hidden',
    overflowX : 'hidden',
    minWidth : '600px',
    height : '100vh',
    boxShadow : 'none',
    width : '100%'
  },
  toolbarMargin: {
    height: "100%",
  },
  description: {
    backgroundColor: "white",
    overflowY : 'auto',
    overflowX : 'hidden',
    height : '90%',
    padding : '1rem'
  },
  
}));

const ProblemDescription = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [title,setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
    dispatch(handleTitleChange(e.target.value))
  }

  return (
    <Paper className={classes.paper} >
      <Grid container className={classes.toolbarMargin} direction='row'>
        <Grid item xs={9} style={{height : '10%',padding:'1rem'}}>
          <input onChange={handleChange} value={title} style={{width : '100%',height:'100%'}} />
        </Grid>
        <Grid container item  xs={12} className={classes.description}>
          <TextEditor id='problem-description' />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProblemDescription;
