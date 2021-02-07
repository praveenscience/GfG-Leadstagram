import React, { Component } from "react";
import Header from "./Header";
import Users from "../constants/Users";
import Card from "./Card";
import Icon from "./Icon";
import Search from "./Search";

class App extends Component {
  state = {
    Users: [],
    Filter: ""
  };
  handleFilterChange = e => {
    this.setState({ Filter: e.target.value });
  };
  componentDidMount() {
    this.setState({ Users });
  }
  render() {
    const users = this.state.Users.filter(
      user =>
        user.Name.toLowerCase().indexOf(this.state.Filter.toLowerCase()) > -1
    );
    return (
      <div className="App">
        <Header dark={true} className="Header">
          Leadstagram
        </Header>
        <div className="container-fluid">
          <div className="row">
            <Search
              Card={Card}
              Filter={this.state.Filter}
              handleFilterChange={this.handleFilterChange}
            />
          </div>
          <div className="row">
            {users.length === 0 ? (
              <div className="col-12">
                <div className="alert alert-danger text-center">
                  Sorry, no users found.
                </div>
              </div>
            ) : (
              users.map((user, key) => (
                <div
                  className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3"
                  key={key}
                >
                  <Card
                    Image={
                      user.Imgur
                        ? "https://i.imgur.com/" + user.Imgur + "b.jpg"
                        : "https://i.imgur.com/DKUR9Tkb.jpg"
                    }
                    ImgAlign="top"
                    Header={user.Name}
                    Title={
                      user.WhatsApp ? (
                        <Icon Network="Phone" Profile={user.WhatsApp} />
                      ) : null
                    }
                  >
                    {Object.keys(user.Social).map(
                      nw =>
                        user.Social[nw] && (
                          <Icon Network={nw} Profile={user.Social[nw]} />
                        )
                    )}
                  </Card>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
