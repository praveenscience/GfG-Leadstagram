import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Bootstrap/Header";
import Guest from "./Pages/Guest";
import Home from "./Pages/Home";

class App extends Component {
  state = {
    LoggedIn: false
  };
  setLoggedIn = LoggedIn => {
    this.setState({ LoggedIn });
  };
  handleLogout = e => {
    e.preventDefault();
    this.setLoggedIn(false);
  };
  render() {
    return (
      <div className="App">
        <Header
          dark={true}
          className="Header"
          to="/"
          Link={Link}
          items={
            this.state.LoggedIn
              ? [
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
                  <Link to="/register" className="btn btn-primary btn-sm ml-3">
                    Register
                  </Link>
                ]
          }
        >
          Leadstagram
        </Header>
        {this.state.LoggedIn ? <Home /> : <Guest />}
      </div>
    );
  }
}

export default App;
