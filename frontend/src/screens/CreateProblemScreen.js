import React from "react";
import { Route, Switch, Link,withRouter } from "react-router-dom";
import { Grid,Button } from "@material-ui/core";
import ProblemDescription from "../components/ProblemDescription";
import ProblemEditorial from "../components/ProblemEditorial";

const CreateProblemScreen = ({ match }) => {
  return (
    <Grid container style={{ paddingTop: "4rem",minHeight : '100vh'}}>
      <Grid container item xs={12} justify='center' style={{backgroundColor : '#f3f3f3',height : '10%'}}>
        <Link style={{textDecoration : 'none'}} to={match.url + "/description"}><Button>Description</Button></Link>
        <Link style={{textDecoration : 'none'}} to={`${match.url}/editorial`}><Button>Editorial</Button></Link>
      </Grid>

      <Grid container item xs={12} style={{padding : '1rem',minHeight : '90%'}}>
        <Switch>
          <Route
            path={match.url + "/description"}
            exact
            component={ProblemDescription}
          />
          <Route
            path={`${match.url}/editorial`}
            exact
            component={ProblemEditorial}
          />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default withRouter(CreateProblemScreen);
