import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
//import logo from "./logo.svg";
import "./styles.css";

import Header from "./components/Header";
import Router from "./components/Router";
import Status from "./components/Status";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
        {/* <Status /> */}
      </div>
    );
  }
}
export default App;
