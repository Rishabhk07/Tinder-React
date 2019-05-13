import React from "react";
import FacebookLogin from "react-facebook-login";

const responseFacebook = response => {
  console.log(response);
  const url = `http://localhost:9090/auth?token=${
    response.accessToken
  }&userId=${response.userID}`;
  fetch(url)
    .then(response => response.json())
    .then(response => console.log(response));
};

class AuthComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <FacebookLogin
        appId="622392748188013"
        autoLoad={true}
        fields="name,email,picture"
        render={renderProps => (
          <button onClick={renderProps.onClick}>
            This is my custom FB button
          </button>
        )}
        callback={responseFacebook}
      />
    );
  }
}

export default AuthComponent;
