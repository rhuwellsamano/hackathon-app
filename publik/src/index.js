import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import App from "./components/App.jsx";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile.jsx";
import About from "./components/About.jsx";
import Signin from "./components/Signin.jsx";
import Edit from "./components/Edit.jsx";
import Checkups from "./components/Checkups.jsx";
import PathingError from "./components/PathingError.jsx";

// Require Sass file so webpack can build it
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import style from "./styles/style.css";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/edit" component={Edit} />
        <Route path="/checkups" component={Checkups} />
        <Route path="/logout" component={App} />
        <Route component={PathingError} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
