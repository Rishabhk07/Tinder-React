import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Profile from "./ProfileComponent";

class Card extends React.Component {
  render() {
    console.log("Into card component");
    return (
      <div className="card m-4" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={this.props.data.user.photos[0].url}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.data.user.name}</h5>
          <p className="card-text">{this.props.data.user.bio}</p>
          <Link
            to={`/users/${this.props.data.user.name}`}
            className="btn btn-primary"
          >
            Open Profile
          </Link>
        </div>
      </div>
    );
  }
}

export default Card;
