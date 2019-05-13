import React from "react";
import Card from "./CardComponent";
import Profile from "./ProfileComponent";
import { Route, BrowserRouter as Router } from "react-router-dom";

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      profiles: []
    };
  }
  render() {
    // console.log(this.state.profiles);
    const cardList = this.props.profiles.map(item => {
      return <Card key={`${item.user._id}`} className="col-flex" data={item} />;
    });
    return <div className="row-flex">{cardList}</div>;
  }
}

export default Body;
