import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import ToDo from "../pages/ToDo";

class RouterRoute extends Component {
  state = {
    isLogged: false,
  };

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login" exact component={LogIn} />

            <Route path="/todo" exact component={ToDo} />

            <Route exact component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default RouterRoute;
