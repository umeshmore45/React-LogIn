import { Component } from "react";
import { withRouter } from "react-router-dom";

class LogInFrom extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.LogInSubmit}>
          <label htmlFor="LogInEmail">Email </label>
          <input type="email" name="LogInEmail" onChange={this.updateSignup} />
          <br />
          <br />
          <label htmlFor="LogInPassword">Password </label>
          <input
            type="passWord"
            name="LogInPassword"
            onChange={this.updateLogIn}
          />
          <br />
          <br />

          <button type="submit"> Login</button>
        </form>
      </div>
    );
  }
}

export default withRouter(LogInFrom);
