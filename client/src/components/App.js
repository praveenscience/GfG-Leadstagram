import React, { Component } from "react";
import Header from "./Header";

class App extends Component {
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
