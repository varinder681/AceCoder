import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CustomSelect = ({language, handleLanguageChange}) => {
  const classes = useStyles();


  return (
    <div>
      <FormControl className={classes.formControl} style={{margin : "0 0 10px"}}>
        <InputLabel htmlFor="age-native-simple" style={{color : "white"}}>Language</InputLabel>
        <Select
          native
          value={language}
          onChange={handleLanguageChange}
          
          style={{padding : "4px",color : "white", backgroundColor : "grey"}}
          inputProps={{
            name: 'java',
            
            id: 'age-native-simple',
          }}
        >
            <option style={{color : "black"}} value="java" name="java">
              Java
            </option>
            <option style={{color : "black"}} value="cpp" name="cpp">
              C++
            </option>
            <option style={{color : "black"}} value="python3" name="python3">
              Python
            </option>
        </Select>
      </FormControl>
    </div>
  );
}

export default CustomSelect