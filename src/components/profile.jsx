import React, { Component } from "react";
import Logo from "../assets/img/profile_1.jpg";

class Profile extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      profile: {
        name: "Kusha",
        surname: "Waghamre",
        designation: "Assistant Manager",
        education: "BA in Enterprenual Development",
      },
    };
  }

  render() {
    return (
      <div className="container">
        <h1 className="pb-3 mb-0 border-bottom">Display Profile</h1>
        <div className="row  border-bottom">
          <div className="col-4 img-fluid">
            <img alt="" src={Logo} height="200"></img>
          </div>
          <div className="col-8 text-right d-flex flex-column">
            <div className="d-block">
              <span className="display-4 d-block">
                {this.state.profile.name + " " + this.state.profile.surname}
              </span>
              <span className="d-block">{this.state.profile.designation}</span>
              <span className="d-block">{this.state.profile.education}</span>
            </div>
            <div className="d-block mt-auto">
              <span>
                <a href="#">View Videos</a> {" | "}
                <a href="#">View Contact details</a>
                {" | "}
                <a href="#">Show interest</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
