import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/pages/Home.module.css";

class Home extends Component {
  render() {
    return (
      <div className={styles["main-container"]}>
        <h1 className={styles["heading"]}>Welcome Home</h1>
        {this.props.location.state ? (
          <p>
            {this.props.location.state.status} SignUp{" "}
            {this.props.location.state.data.email}{" "}
          </p>
        ) : (
          <p></p>
        )}
        <div className={styles["button"]}></div>
        <Link to="/signup">
          {" "}
          <button className={styles["but-st"]}>SignUp </button>
        </Link>
        <Link to="/login">
          <button className={styles["but-st"]}>LogIn</button>
        </Link>
      </div>
    );
  }
}

export default Home;
