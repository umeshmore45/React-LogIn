import { Component } from "react";
import { withRouter } from "react-router-dom";
import LogInFrom from "../component/LogInFrom";
import { logInurl } from "../services/FetchData";

class LogIn extends Component {
  state = {
    jwtToken: {},
  };

  changeRoute = (event) => {
    this.props.history.push({
      pathname: "/todo",
      state: this.state.jwtToken,
    });
  };

  LogInSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.LogInEmail.value);
    console.log(event.target.LogInPassword.value);
    fetch(logInurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: event.target.LogInEmail.value,
        password: event.target.LogInPassword.value,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          jwtToken: data.data[0].jwt,
        });

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
        <h1>Login</h1>
        <LogInFrom LogInSubmit={this.LogInSubmit} />
      </div>
    );
  }
}

export default withRouter(LogIn);
