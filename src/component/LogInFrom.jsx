import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "./LogInFrom.module.css";

class LogInFrom extends Component {
  render() {
    return (
      <div className={styles["main-container"]}>
        <div className={styles["img-container"]}>
          <img
            src="https://cdn.dribbble.com/users/338126/screenshots/14926319/media/20b64b8c929f2cad121aae5f0d02e08c.gif"
            alt="gif-log"
          />
        </div>
        <form className={styles["form"]} onSubmit={this.props.LogInSubmit}>
          <div className={styles["input-email"]}>
            <label className={styles["label"]} htmlFor="LogInEmail">
              Email<span className="span-global">* </span>{" "}
            </label>
            <input
              type="email"
              name="LogInEmail"
              onChange={this.props.updateEmail}
              className={styles["Log-Email"]}
              required
            />
          </div>

          <br />
          <br />
          <div className={styles["input-pass"]}>
            <label htmlFor="LogInPassword">
              Password<span className="span-global">* </span>
            </label>
            <input
              type="passWord"
              name="LogInPassword"
              onChange={this.props.updatePassword}
              className={styles["Log-pass"]}
              required
            />
          </div>
          <br />
          <br />
          <p className={styles["signup"]}>
            Don't have an account yet ?<Link to="/signup"> Sign Up</Link>
          </p>

          <button type="submit" className={styles["login"]}>
            {" "}
            Login
          </button>
          <Link to="/">
            <button className={styles["back"]}>Back</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default withRouter(LogInFrom);
