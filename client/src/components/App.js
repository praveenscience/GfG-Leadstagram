import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { GetCurrentUser, LogoutUser } from "../services/Auth";
import Header from "./Bootstrap/Header";
import Guest from "./Pages/Guest";
import Home from "./Pages/Home";

class App extends Component {
  state = {
    LoggedIn: false,
    AJAXCall: false
  };
  setLoggedIn = LoggedIn => {
    this.setState({ LoggedIn });
  };
  handleLogout = e => {
    e.preventDefault();
    LogoutUser().then(() => {
      this.setLoggedIn(false);
    });
  };
  componentDidMount() {
    GetCurrentUser()
      .then(res => {
        if (res.status === 200) {
          this.setState({
            LoggedIn: res.data.FullName
          });
          this.props.history.push("/");
        }
      })
      .catch(() => {})
      .then(() => {
        this.setState({ AJAXCall: true });
      });
  }
  render() {
    return (
      <div className="App">
        {this.state.AJAXCall ? (
          <>
            <Header
              dark={true}
              className="Header"
              to="/"
              Link={Link}
              items={
                this.state.LoggedIn
                  ? [
                      <span className="d-inline-block pr-3 pt-1 text-white user-info">
                        Welcome {this.state.LoggedIn}
                      </span>,
                      <Link
                        to="/logout"
                        className="btn btn-danger btn-sm"
                        onClick={this.handleLogout}
                      >
                        Sign Out
                      </Link>
                    ]
                  : [
                      <Link to="/" className="btn btn-primary btn-sm ml-3">
                        Welcome
                      </Link>,
                      <Link to="/login" className="btn btn-primary btn-sm ml-3">
                        Sign In
                      </Link>,
                      <Link
                        to="/register"
                        className="btn btn-primary btn-sm ml-3"
                      >
                        Register
                      </Link>
                    ]
              }
            >
              Leadstagram
            </Header>
            {this.state.LoggedIn ? (
              <Home />
            ) : (
              <Guest setLoggedIn={this.setLoggedIn} />
            )}
          </>
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="alert alert-warning mt-3">Loading...</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(App);
