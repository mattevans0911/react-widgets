import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import DisplayList from "./DisplayList";
import Counter from "./Counter";
import Color from "./Color";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <div className="router-wrapper">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/list">
                <DisplayList />
              </Route>
              <Route path="/counter">
                <Counter />
              </Route>
              <Route path="/color">
                <Color />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
