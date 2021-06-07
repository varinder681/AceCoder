import React from "react";
import { Route, Switch, Link, withRouter } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import ProblemDescription from "../components/CreateProblem/ProblemDescription";
import ProblemEditorial from "../components/CreateProblem/ProblemEditorial";
import ProblemSolution from "../components/CreateProblem/ProblemSolution";
import ProblemSubmit from "../components/CreateProblem/ProblemSubmit";


const CreateProblemScreen = ({ match }) => {
  return (
    <>
    <Grid
          container
          item
          xs={12}
          justify="center"
          style={{ backgroundColor: "#f3f3f3", height: "10%",paddingTop : "4rem" }}
        >
          <Link
            style={{ textDecoration: "none" }}
            to={match.url + "/description"}
          >
            <Button>Description</Button>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to={`${match.url}/editorial`}
          >
            <Button>Editorial</Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`${match.url}/solution`}>
            <Button>Solution</Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`${match.url}/submit`}>
            <Button>Submit</Button>
          </Link>
        </Grid>
      <Grid
        container
        style={{
          // minHeight: "100vh",
          minWidth: "300px"
        }}
      >
        

        <Grid container item xs={12} style={{height : '100%' }}>
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
            <Route
              path={`${match.url}/solution`}
              exact
              component={ProblemSolution}
            />
            <Route
              path={`${match.url}/submit`}
              exact
              component={ProblemSubmit}
            />
          </Switch>
        </Grid>
      </Grid>
    </>
  );
};

export default withRouter(CreateProblemScreen);
