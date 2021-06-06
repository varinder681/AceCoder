import React,{useState} from 'react'
import {Grid,makeStyles} from '@material-ui/core'
import EditorScreen from '../../screens/EditorScreen';
import DriverCodeEditor from './DriverCodeEditor';

const useStyles = makeStyles(theme => ({
    container : {
        backgroundColor : 'grey',
        height : '90vh'
    }
}))

const ProblemSolution = () => {
    const classes = useStyles();
    const [driverCode, setDriverCode] = useState("Write your Driver Code here");
    return (
        <>
            <Grid container item className={classes.container}>
                <Grid container item xs={6} style={{}}>
                    <DriverCodeEditor setDriverCode={setDriverCode} />
                </Grid>
                <Grid container item xs={6}>
                    <EditorScreen driverCode={driverCode} />
                </Grid>
            </Grid>
        </>
    )
}

export default ProblemSolution
