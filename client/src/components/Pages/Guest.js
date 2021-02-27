import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Welcome from "../Login/Welcome";
import Login from "../Login/Login";
import Register from "../Login/Register";

const InitState = {
  Login: {
    Email: "",
    Password: "",
    Error: ""
  },
  Register: {
    Email: "",
    Password: "",
    ConfPass: "",
    FullName: "",
    Error: ""
  }
};

class Guest extends Component {
  state = {
    Login: {
      Email: "",
      Password: "",
      Error: ""
    },
    Register: {
      Email: "",
      Password: "",
      ConfPass: "",
      FullName: "",
      Error: ""
    }
  };
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      const { Login, Register } = InitState;
      this.setState({
        Login,
        Register
      });
    }
  }
  updateForm = (Form, Field, Value) => {
    this.setState({
      [Form]: {
        ...this.state[Form],
        [Field]: Value
      }
    });
  };
  handleLogin = e => {
    e.preventDefault();
    const { Email: Username, Password } = this.state.Login;
  };
  render() {
    return (
      <div className="Guest">
        <Switch>
          <Route
            path="/login"
            render={() => (
              <Login
                Values={this.state.Login}
                updateForm={this.updateForm}
                handleLogin={this.handleLogin}
              />
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

export default withRouter(Guest);
