import { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";
import styles from "../styles/pages/Home.module.css";

class Home extends Component {
  render() {
    return (
      <div className={styles["main-container"]}>
        <Navigation color={"nav-red"} />
        <h1 className={styles["heading"]}>Welcome Home</h1>
        {this.props.location.state ? (
          <p>
            {this.props.location.state.status} SignUp{" "}
            {this.props.location.state.data.email}{" "}
          </p>
        ) : (
          <p></p>
        )}
        <img
          src="https://cdn.dribbble.com/users/2851002/screenshots/9667092/media/09648e273e248e7cfd22ade4010b2a6e.gif"
          alt="gif"
          className={styles["img"]}
        />
        <div className={styles["button"]}>
          <Link to="/signup">
            {" "}
            <button className={styles["but-st"]}>SignUp </button>
          </Link>
          <Link to="/login">
            <button className={styles["but-st"]}>LogIn</button>
          </Link>
        </div>
        <Footer color={"footer-red"} />
      </div>
    );
  }
}

export default Home;
