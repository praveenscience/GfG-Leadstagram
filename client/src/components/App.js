import React, { Component } from "react";
import Header from "./Header";
import Users from "../constants/Users";

class App extends Component {
  state = {
    Users: []
  };
  componentDidMount() {
    this.setState({ Users });
  }
  render() {
    return (
      <div className="App">
        <Header dark={true} className="Header">
          Leadstagram
        </Header>
      </div>
    );
  }
}

export default App;
