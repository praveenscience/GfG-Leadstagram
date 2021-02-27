import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "../Login/Welcome";
import Login from "../Login/Login";
import Register from "../Login/Register";

class Guest extends Component {
  state = {
    Login: {
      Email: "",
      Password: ""
    },
    Register: {
      Email: "",
      Password: "",
      ConfPass: "",
      FullName: ""
    }
  };
  updateForm = (Form, Field, Value) => {
    this.setState({
      [Form]: {
        ...this.state[Form],
        [Field]: Value
      }
    });
  };
  render() {
    return (
      <div className="Guest">
        <Switch>
          <Route
            path="/login"
            render={() => (
              <Login Values={this.state.Login} updateForm={this.updateForm} />
            )}
          />
          <Route
            path="/register"
            render={() => (
              <Register
                Values={this.state.Register}
                updateForm={this.updateForm}
              />
            )}
          />
          <Route path="/" exact={true} component={Welcome} />
          <Route>
            <div className="NotFound">
              <p>Not Found</p>
            </div>
          </Route>
        </Switch>
        <div className="container">
          <div className="row">
            <div className="col-8 offset-2 mt-3">
              <pre className="rounded border bg-light p-2">
                {JSON.stringify(this.state, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Guest;
