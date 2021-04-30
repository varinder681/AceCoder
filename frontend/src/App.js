import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core";

import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Temp from "./screens/Temp";

import Home from "./screens/HomeScreen";

import theme from "./ui/Theme";
const ProblemSolveScreen = React.lazy(() =>
  import("./screens/ProblemSolveScreen")
);
const CreateProblemScreen = React.lazy(() =>
  import("./screens/CreateProblemScreen")
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" component={Header} />

        <Route
          path="/editor"
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <ProblemSolveScreen />
            </Suspense>
          )}
        />
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/temp" component={Temp} />
        <Route
          path="/create-problem"
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <CreateProblemScreen />
            </Suspense>
          )}
        />
        <Route path="/" exact render={() => <Home />} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
