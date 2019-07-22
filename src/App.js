import React, { Component } from "react";
import "./App.css";
import Gifted from "./components/gifted";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Gifted />
      </React.Fragment>
    );
  }
}

export default App;
