import { Component } from "react";
import { withRouter } from "react-router-dom";
import SignUpFrom from "../component/SignUpFrom";
import { signUpUrl } from "../services/FetchData";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    confromPassword: "",
  };

  updateEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  updatePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  updateConPassWord = (event) => {
    this.setState({
      confirmPassword: event.target.value,
    });
  };

  changeRoute = (event) => {
    this.props.history.push("/");
  };

  SignUpSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.confromPassword);
    fetch(signUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.password,
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
        <SignUpFrom
          SignUpSubmit={this.SignUpSubmit}
          updateEmail={this.updateEmail}
          updatePassword={this.updatePassword}
          updateConPassWord={this.updateConPassWord}
        />
      </div>
    );
  }
}

export default withRouter(SignUp);
