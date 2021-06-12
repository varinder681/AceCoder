import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ThemeProvider, LinearProgress, Grid } from "@material-ui/core";

import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Temp from "./screens/Temp";

import Home from "./screens/HomeScreen";

import theme from "./ui/Theme";
const ProblemSolveScreen = React.lazy(() =>
  import("./screens/ProblemSolveScreen")
);

const DiscussionForumScreen = React.lazy(() =>
  import("./screens/DiscussionForumScreen")
);

const CreateProblemScreen = React.lazy(() =>
  import("./screens/CreateProblemScreen")
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Route path="/" component={Header} />
        <Switch>
          <Route
            path="/problem/discuss/:problemTitle/:discussionId"
            render={(props) => (
              <Suspense fallback={<div>Loading...</div>}>
                <DiscussionForumScreen {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/problem/:title"
            render={(props) => (
              <Suspense fallback={<div>Loading...</div>}>
                <ProblemSolveScreen {...props} />
              </Suspense>
            )}
          />
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/register" exact component={RegisterScreen} />
          <Route path="/temp" component={Temp} />
          <Route
            path="/create-problem"
            render={() => (
              <Suspense
                fallback={
                  <Grid style={{ marginTop: "4rem" }}>
                    <LinearProgress style={{ width: "100%" }} />
                  </Grid>
                }
              >
                <CreateProblemScreen />
              </Suspense>
            )}
          />
          <Route path="/" exact render={() => <Home />} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
