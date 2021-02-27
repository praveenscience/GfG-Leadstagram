import React, { Component } from "react";
import Header from "./Bootstrap/Header";
import Guest from "./Pages/Guest";
import Home from "./Pages/Home";

class App extends Component {
  state = {
    LoggedIn: false
  };
  render() {
    return (
      <div className="App">
        <Header
          dark={true}
          className="Header"
          items={
            this.state.LoggedIn
              ? [<button className="btn btn-danger btn-sm">Sign Out</button>]
              : [
                  <button className="btn btn-primary btn-sm ml-3">
                    Welcome
                  </button>,
                  <button className="btn btn-primary btn-sm ml-3">
                    Sign In
                  </button>,
                  <button className="btn btn-primary btn-sm ml-3">
                    Register
                  </button>
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
