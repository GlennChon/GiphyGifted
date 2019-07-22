import React, { Component } from "react";
import "./App.css";
import Gifted from "./components/gifted";

class App extends Component {
  state = {};

  // On first mount, use default search value
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <Gifted />
      </React.Fragment>
    );
  }
}

export default App;
