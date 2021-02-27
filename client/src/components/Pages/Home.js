import React, { Component } from "react";
import { GetUsers } from "../../services/Users";
import Icon from "../Users/Icon";
import Search from "../Users/Search";
import UserList from "../Users/UserList";

class Home extends Component {
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
      <div className="Home">
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

export default Home;
