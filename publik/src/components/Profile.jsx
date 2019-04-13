import React, { Component } from "react";
import { isSignInPending, loadUserData, Person } from "blockstack";

const avatarFallbackImage =
  "https://s3.amazonaws.com/onename/avatar-placeholder.png";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        name() {
          return "Anonymous";
        },
        avatarUrl() {
          return avatarFallbackImage;
        }
      },
      email: "",
      age: "",
      gender: "",
      editButtonClicked: false
    };
  }

  render() {
    const { handleSignOut } = this.props;
    const { person } = this.state;
    console.log("state: ", this.state);
    console.log("props: ", this.props);
    console.log("load user data: ", loadUserData().email);

    return !isSignInPending() ? (
      <div className="panel-welcome" id="section-2">
        <div className="avatar-section">
          <img
            src={person.avatarUrl() ? person.avatarUrl() : avatarFallbackImage}
            className="img-rounded avatar"
            id="avatar-image"
          />
        </div>
        <h1>
          Hello,{" "}
          <span id="heading-name">
            {person.name() ? person.name() : "Nameless Person"}
          </span>
          !
        </h1>
        <h3>email: {this.state.email}</h3>
        <h3>age: {this.state.age}</h3>
        <h3>gender: {this.state.gender}</h3>

        <p className="lead">
          <button className="btn btn-primary btn-lg" onClick={this.handleEdit}>
            Edit Profile
          </button>
          <span>{"      "}</span>
          <button
            className="btn btn-primary btn-lg"
            id="signout-button"
            onClick={handleSignOut.bind(this)}
          >
            Logout
          </button>
        </p>
      </div>
    ) : null;
  }

  componentWillMount() {
    this.setState({
      person: new Person(loadUserData().profile)
    });
    console.log("load userdata:", loadUserData());
  }
}
