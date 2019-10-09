import React, { Component } from "react";
import { Route } from "react-router-dom";
//import logo from "./logo.svg";

import Home from "../components/Home";
import About from "../components/About";
import Topics from "../components/Topics";
import Topic from "../components/Topic";
import Login from "../components/Login";
import Mentor from "../components/Mentor";
import Header from "../components/Header";

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  search = val => {
    this.setState({ search: val });
  };

  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/topics/:Id" component={Topic} />
        <Route path="/Mentor" component={Mentor} />
      </div>
    );
  }
}
export default Router;
