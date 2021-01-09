import { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class SignUpFrom extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.SignUpSubmit}>
          <label htmlFor="SignUpEmail">
            Email<span className="span-global">* </span>{" "}
          </label>
          <input
            type="email"
            name="SignUpEmail"
            onChange={this.updateSignup}
            required
          />
          <br />
          <br />
          <label htmlFor="SignUpPassword">
            Password<span className="span-global">* </span>{" "}
          </label>
          <input
            type="passWord"
            name="SignUpPassword"
            onChange={this.updateSignup}
            required
          />
          <br />
          <br />
          <label htmlFor="SignUpConPassword">
            Confrom Password<span className="span-global">* </span>{" "}
          </label>
          <input
            type="passWord"
            name="SignUpConPassword"
            onChange={this.updateSignup}
            required
          />
          <br />
          <br />
          <p>
            Already A Registered ? Click Here To
            <Link to="/login"> Login</Link>{" "}
          </p>
          <button type="submit">Register</button>
          <Link to="/">
            <button> Go Back</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpFrom);
