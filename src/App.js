import React from "react";

import HomePage from "./pages/homePage/home.page";
import ProjectPage from "./pages/projectPage/project.page";
import ProfilePage from "./pages/profilePage/profile.page";

import NotFoundPage from "./pages/404";
import Header from "./components/Header.component";

import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/project/:id" component={ProjectPage} />
        <Route path={["/new", "/profile/:id"]} component={ProfilePage} />
        <Route path="/notfound" component={NotFoundPage} />
        <Redirect to="/notfound" />
      </Switch>
    </HashRouter>
  );
}

export default App;
