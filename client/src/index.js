import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./assets/scss/material-kit-react.scss?v=1.4.0";
//import "../dist/material-kit-react.css";

// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.jsx";
import ProfilePage from "./views/ProfilePage/ProfilePage.jsx";
import LoginPage from "./views/LoginPage/LoginPage.jsx";
import SignupPage from "./views/SignupPage/SignupPage.jsx";
import FriendsPage from "./views/FriendsPage/FriendsPage.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/friends-page" component={FriendsPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/signup-page" component={SignupPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
