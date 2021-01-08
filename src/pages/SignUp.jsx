import { Component } from "react";
import { withRouter } from "react-router-dom";
import SignUpFrom from "../component/SignUpFrom";
import { signUpUrl } from "../services/FetchData";

class SignUp extends Component {
  state = {
    user: [],
  };

  changeRoute = (event) => {
    this.props.history.push("/");
  };

  SignUpSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.SignUpEmail.value);
    console.log(event.target.SignUpPassword.value);
    console.log(event.target.SignUpConPassword.value);
    fetch(signUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: event.target.SignUpEmail.value,
        password: event.target.SignUpPassword.value,
        confirmPassword: event.target.SignUpConPassword.value,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.changeRoute();
      })

      .catch((e) => {
        console.log(e);
        return e;
      });
  };

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <SignUpFrom SignUpSubmit={this.SignUpSubmit} />
      </div>
    );
  }
}

export default withRouter(SignUp);
