import React, { Component } from "react";
import Header from "./Header";
import Users from "../constants/Users";
import Card from "./Card";

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
    const SocialIcons = {
      Facebook: {
        IconClass: "social-facebook",
        UrlPrepend: "https://www.facebook.com/"
      },
      Twitter: {
        IconClass: "social-twitter",
        UrlPrepend: "https://twitter.com/"
      },
      LinkedIn: {
        IconClass: "social-linkedin",
        UrlPrepend: "https://www.linkedin.com/in/"
      },
      Instagram: {
        IconClass: "social-instagram",
        UrlPrepend: "https://www.instagram.com/"
      },
      Quora: {
        IconClass: "question",
        UrlPrepend: "https://www.quora.com/"
      },
      YouTube: {
        IconClass: "social-youtube",
        UrlPrepend: "https://www.youtube.com/"
      },
      Reddit: {
        IconClass: "social-reddit",
        UrlPrepend: "https://www.reddit.com/"
      },
      Website: {
        IconClass: "globe",
        UrlPrepend: ""
      },
      Phone: {
        IconClass: "screen-smartphone",
        UrlPrepend: "tel:"
      }
    };
    const Icon = ({ Network, Profile }) => (
      <a
        href={SocialIcons[Network].UrlPrepend + Profile}
        className="btn btn-outline-success mr-2 btn-sm"
      >
        <i className={"icon-" + SocialIcons[Network].IconClass}></i>
        {Network === "Phone" ? " " + Profile : null}
      </a>
    );
    return (
      <div className="App">
        <Header dark={true} className="Header">
          Leadstagram
        </Header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Card className="mb-3" Header="Filter">
                <form action="">
                  <div className="form-group m-0">
                    <label htmlFor="enterName" className="sr-only">
                      Enter Name
                    </label>
                    <input
                      type="text"
                      name="enterName"
                      id="enterName"
                      className="form-control"
                      placeholder="Enter Name"
                      value={this.state.Filter}
                      onChange={this.handleFilterChange}
                    />
                  </div>
                </form>
              </Card>
            </div>
          </div>
          <div className="row">
            {this.state.Users.filter(
              user => user.Name.indexOf(this.state.Filter) > -1
            ).map((user, key) => (
              <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3" key={key}>
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
                  {user.Social.Facebook && (
                    <Icon Network="Facebook" Profile={user.Social.Facebook} />
                  )}
                  {user.Social.Twitter && (
                    <Icon Network="Twitter" Profile={user.Social.Twitter} />
                  )}
                  {user.Social.LinkedIn && (
                    <Icon Network="LinkedIn" Profile={user.Social.LinkedIn} />
                  )}
                  {user.Social.Instagram && (
                    <Icon Network="Instagram" Profile={user.Social.Instagram} />
                  )}
                  {user.Social.Quora && (
                    <Icon Network="Quora" Profile={user.Social.Quora} />
                  )}
                  {user.Social.YouTube && (
                    <Icon Network="YouTube" Profile={user.Social.YouTube} />
                  )}
                  {user.Social.Reddit && (
                    <Icon Network="Reddit" Profile={user.Social.Reddit} />
                  )}
                  {user.Social.Website && (
                    <Icon Network="Website" Profile={user.Social.Website} />
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
        <pre className="m-5 border radius bg-light">
          Total Users: {this.state.Users.length + "\n"}
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    );
  }
}

export default App;
