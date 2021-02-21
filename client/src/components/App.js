import React, { Component } from "react";
import { GetUsers } from "../services/Users";
import Header from "./Header";
import Icon from "./Icon";
import Search from "./Search";
import UserList from "./UserList";

class App extends Component {
  state = {
    Users: [],
    Filter: ""
  };
  handleFilterChange = e => {
    this.setState({ Filter: e.target.value });
  };
  componentDidMount() {
    GetUsers().then(res =>
      this.setState({
        RawData: res.data,
        Users: Object.keys(res.data).map(Slug => ({
          ...res.data[Slug],
          Slug
        }))
      })
    );
  }
  render() {
    return (
      <div className="App">
        <Header
          dark={true}
          className="Header"
          items={[
            <button className="btn btn-primary btn-sm">Login</button>,
            <button className="btn btn-primary btn-sm ml-3">Register</button>
          ]}
        >
          Leadstagram
        </Header>
        <div className="container-fluid">
          <div className="row">
            <Search
              Filter={this.state.Filter}
              handleFilterChange={this.handleFilterChange}
            />
          </div>
          <div className="row">
            <UserList
              Users={this.state.Users}
              Filter={this.state.Filter}
              Icon={Icon}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
