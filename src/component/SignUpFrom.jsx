import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "../styles/component/SignUpFrom.module.css";

class SignUpFrom extends Component {
  render() {
    return (
      <div className={styles["Main-container"]}>
        <div className={styles["img-container"]}>
          <img
            src="https://cdn.dribbble.com/users/3112036/screenshots/6407605/attachments/1371826/no_comments.png"
            alt="side-logo"
          />
        </div>
        <form className={styles["form"]} onSubmit={this.props.SignUpSubmit}>
          <div className={styles["form-in"]}>
            <label htmlFor="SignUpEmail">
              Email<span className="span-global">* </span>{" "}
            </label>
            <input
              type="email"
              name="SignUpEmail"
              onChange={this.props.updateEmail}
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
              onChange={this.props.updatePassword}
              required
            />
            <br />
            <br />
            <label htmlFor="SignUpConPassword">
              Confirm Password<span className="span-global">* </span>{" "}
            </label>
            <input
              type="passWord"
              name="SignUpConPassword"
              onChange={this.props.updateConPassWord}
              required
            />
            <br />
            <br />
            <p>
              Already A Registered ? Click Here To
              <Link to="/login"> Login</Link>{" "}
            </p>
            <button className={styles["but1"]} type="submit">
              Register
            </button>
            <Link to="/">
              <button className={styles["but"]}>Back</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpFrom);
