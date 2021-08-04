import React from "react";
import HomePage from "./pages/home.page";
import ProjectPage from "./pages/project.page";
import NotFoundPage from "./pages/404";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/project" component={ProjectPage} />
        <Route path="/notfound" component={NotFoundPage} />
        <Redirect to="/notfound" />
      </Switch>
    </Router>
  );
}

export default App;
