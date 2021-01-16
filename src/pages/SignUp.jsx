import { Component } from "react";
import { withRouter } from "react-router-dom";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";
import SignUpFrom from "../component/SignUpFrom";
import { signUpUrl } from "../services/FetchData";
import styles from "../styles/pages/SignUp.module.css";
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

  changeRoute = (data) => {
    this.props.history.push({
      pathname: "/",
      state: data,
    });
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
        this.changeRoute(data);
      })

      .catch((e) => {
        console.log(e);
        return e;
      });
  };

  render() {
    return (
      <div className={styles["main"]}>
        <Navigation color={"nav-blue"} />
        <SignUpFrom
          SignUpSubmit={this.SignUpSubmit}
          updateEmail={this.updateEmail}
          updatePassword={this.updatePassword}
          updateConPassWord={this.updateConPassWord}
        />
        <Footer color={"footer-blue"} />
      </div>
    );
  }
}

export default withRouter(SignUp);
