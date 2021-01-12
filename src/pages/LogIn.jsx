import { Component } from "react";
import { withRouter } from "react-router-dom";
import LogInFrom from "../component/LogInFrom";
import { logInurl } from "../services/FetchData";

class LogIn extends Component {
  state = {
    email: "",
    password: "",
    message: [],
    jwtToken: {},
  };

  updateEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  updatePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  changeRoute = (event) => {
    if (this.state.jwtToken) {
      this.props.history.push({
        pathname: "/todo",
        state: this.state,
      });
    }
  };

  LogInSubmit = (event) => {
    event.preventDefault();

    fetch(logInurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status === "UnSuccessful") {
          this.setState({
            message: data,
          });
        }

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
        <LogInFrom
          LogInSubmit={this.LogInSubmit}
          updateEmail={this.updateEmail}
          updatePassword={this.updatePassword}
        />
        <p>{this.state.message.message}</p>
      </div>
    );
  }
}

export default withRouter(LogIn);
