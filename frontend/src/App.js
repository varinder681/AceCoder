import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core";

import EditorScreen from "./screens/EditorScreen";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";
import LoginScreen2 from "./screens/LoginScreen2";

import theme from "./ui/Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" component={Header} />
        <Route path="/editor" component={EditorScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/login2" component={LoginScreen2} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
