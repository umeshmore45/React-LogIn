import { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class LogInFrom extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.LogInSubmit}>
          <label htmlFor="LogInEmail">
            Email<span className="span-global">* </span>{" "}
          </label>
          <input
            type="email"
            name="LogInEmail"
            onChange={this.updateSignup}
            required
          />
          <br />
          <br />
          <label htmlFor="LogInPassword">
            Password<span className="span-global">* </span>
          </label>
          <input
            type="passWord"
            name="LogInPassword"
            onChange={this.updateLogIn}
            required
          />
          <br />
          <br />
          <p>
            Don't have an account yet ?<Link to="/signup"> Sign Up</Link>
          </p>

          <button type="submit"> Login</button>
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default withRouter(LogInFrom);
