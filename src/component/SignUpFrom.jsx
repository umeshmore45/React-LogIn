import { Component } from "react";
import { withRouter } from "react-router-dom";

class SignUpFrom extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.props.SignUpSubmit}>
          <label htmlFor="SignUpEmail">Email </label>
          <input type="email" name="SignUpEmail" onChange={this.updateSignup} />
          <br />
          <br />
          <label htmlFor="SignUpPassword">Password </label>
          <input
            type="passWord"
            name="SignUpPassword"
            onChange={this.updateSignup}
          />
          <br />
          <br />
          <label htmlFor="SignUpConPassword">Confrom Password </label>
          <input
            type="passWord"
            name="SignUpConPassword"
            onChange={this.updateSignup}
          />
          <br />
          <br />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpFrom);
