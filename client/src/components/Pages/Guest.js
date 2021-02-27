import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "../Login/Welcome";
import Login from "../Login/Login";
import Register from "../Login/Register";

class Guest extends Component {
  render() {
    return (
      <div className="Guest">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" exact={true} component={Welcome} />
          <Route>
            <div className="NotFound">
              <p>Not Found</p>
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Guest;
