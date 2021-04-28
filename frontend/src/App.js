import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { ThemeProvider, Paper } from "@material-ui/core";

import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";
import Temp from './screens/Temp';
import Home from './screens/Home'

import theme from "./ui/Theme";
import ProblemSolveScreen from "./screens/ProblemSolveScreen";
import CreateProblemScreen from "./screens/CreateProblemScreen";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Paper>
          <Route path="/editor" component={ProblemSolveScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path='/temp' component={Temp} />
          <Route path='/create-problem' component={CreateProblemScreen} />
          <Route path="/" exact component={Home} />
        </Paper>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
