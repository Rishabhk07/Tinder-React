import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Body from "./Body";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Profile from "./ProfileComponent";
import Error from "./ErrorComponent";
import Loading from "./Loadingcomponent";
import AuthComponent from "./AuthComponent";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profiles: [],
      loading: true
    };
  }
  componentDidMount() {
    fetch("http://localhost:9090/")
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.status === 401) <Redirect to="/404" />;

        this.setState({
          profiles: response.data.results,
          loading: false
        });
      });
  }
  render() {
    return (
      <div>
        <Router>
          <Header />
          <div className="container" />
          <Route path="/" component={AuthComponent} exact={true} />
          <Route
            path="/users"
            component={() =>
              this.state.loading ? (
                <Loading />
              ) : (
                <Body profiles={this.state.profiles} />
              )
            }
            exact
          />
          <Route
            path="/users/:userId"
            component={({ match }) => (
              <Profile profiles={this.state.profiles} match={match} />
            )}
          />
          <Route path="/404" component={Error} exact={true} />
        </Router>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
