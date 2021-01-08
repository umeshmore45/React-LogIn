import { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome Home</h1>

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
