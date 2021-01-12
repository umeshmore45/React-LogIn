import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/pages/Home.module.css";

class Home extends Component {
  render() {
    return (
      <div className={styles["main-container"]}>
        <h1>Welcome Home</h1>
        {this.props.location.state ? (
          <p>
            {this.props.location.state.status} SignUp{" "}
            {this.props.location.state.data.email}{" "}
          </p>
        ) : (
          <p></p>
        )}

        <Link to="/signup">
          {" "}
          <button>SignUp </button>
        </Link>
        <Link to="/login">
          <button>LogIn</button>
        </Link>
      </div>
    );
  }
}

export default Home;
