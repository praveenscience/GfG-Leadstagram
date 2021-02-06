import React, { Component } from "react";
import A from "./A";
import B from "./B";
import Header from "./Header";

class App extends Component {
  state = {
    Person: {
      Name: "Praveen",
      Students: ["Rohit", "Anup"]
    },
    MyName: "Praveen"
  };
  handleClick = () => {
    this.setState({ Person: { ...this.state.Person, Name: "Rohit" } });
  };
  render() {
    return (
      <div className="App">
        <Header dark={true} className="Header">
          {this.state.Person.Name}
        </Header>
        <pre className="m-5 p-2 rounded border bg-light">
          {JSON.stringify(this.state, null, 2)}
        </pre>
        <div className="container">
          <div className="row">
            <div className="col-6 border text-center">
              <A handleClick={this.handleClick} />
            </div>
            <div className="col-6 border text-center">
              <B Name={this.state.Person.Name} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
