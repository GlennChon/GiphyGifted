import React, { Component } from "react";
import "./App.css";
import _ from "lodash";
import { getGifs } from "./services/giphyService";

class App extends Component {
  state = {
    gifs: {},
    // First real react project, appropriate default search text
    defaultValue: "I dont know what Im doing"
  };

  // On first mount, use default search value
  componentDidMount() {
    this.updateGifs(this.state.defaultValue);
  }

  // Get gifs and set state
  async updateGifs(searchValue) {
    let json = await getGifs(searchValue);
    this.setState({ gifs: json });
    console.log(this.state.gifs);
  }

  render() {
    return <div>TEST</div>;
  }
}

export default App;
