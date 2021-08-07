import React from "react";

import HomePage from "./pages/homePage/home.page";
import ProjectPage from "./pages/projectPage/project.page";
import ProfilePage from "./pages/profilePage/profile.page";

import NotFoundPage from "./pages/404";
import Header from "./components/Header.component";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/project/:id" component={ProjectPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/notfound" component={NotFoundPage} />
        <Redirect to="/notfound" />
      </Switch>
    </Router>
  );
}

export default App;
