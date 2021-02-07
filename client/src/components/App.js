import React, { Component } from "react";
import Header from "./Header";
import Users from "../constants/Users";
import Card from "./Card";

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
        <div className="container-fluid">
          <div className="row">
            {this.state.Users.map((user, key) => (
              <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
                <Card
                  Image={"https://i.imgur.com/" + user.Imgur + "b.jpg"}
                  ImgAlign="top"
                  key={key}
                  Header={user.Name}
                ></Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
