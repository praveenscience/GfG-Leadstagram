import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Welcome from "../Login/Welcome";
import Login from "../Login/Login";
import Register from "../Login/Register";
import { LoginUser } from "../../services/Auth";

const InitState = {
  Login: {
    Email: "",
    Password: ""
  },
  Register: {
    Email: "",
    Password: "",
    ConfPass: "",
    FullName: ""
  },
  Error: null,
  AJAXCall: false
};

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
    },
    Error: null,
    AJAXCall: false
  };
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState(InitState);
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
  handleAJAX = AJAXCall => {
    this.setState({
      AJAXCall
    });
  };
  handleLogin = e => {
    e.preventDefault();
    const { Email: Username, Password } = this.state.Login;
    const { setLoggedIn, history } = this.props;
    this.handleAJAX(true);
    LoginUser(Username, Password)
      .then(res => {
        if (res.status === 200) {
          const LoggedInUser = res.data
            .replace("Successfully logged in as ", "")
            .slice(0, -1);
          this.handleAJAX(false);
          setLoggedIn(LoggedInUser);
          history.push("/");
        }
      })
      .catch(err => {
        this.setState({
          Error: err.response.data
        });
        setTimeout(() => {
          this.setState({
            Error: null
          });
        }, 5000);
      })
      .then(() => {
        this.handleAJAX(false);
      });
  };
  render() {
    return (
      <div className="Guest">
        {this.state.Error && (
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                <div className="alert alert-danger">{this.state.Error}</div>
              </div>
            </div>
          </div>
        )}
        <Switch>
          <Route
            path="/login"
            render={() => (
              <Login
                Values={this.state.Login}
                updateForm={this.updateForm}
                handleLogin={this.handleLogin}
                AJAXCall={this.state.AJAXCall}
              />
            )}
          />
          <Route
            path="/register"
            render={() => (
              <Register
                Values={this.state.Register}
                updateForm={this.updateForm}
                AJAXCall={this.state.AJAXCall}
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
      </div>
    );
  }
}

export default withRouter(Guest);
