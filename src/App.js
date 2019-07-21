import React, { Component } from "react";
import "./App.css";
import _ from "lodash";
import { getGifs } from "./services/giphyService";
import GifList from "./components/gifList";

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
    if (this.state.gifs.data) {
      // Passes gif data to giflist and renders
      return <GifList gifs={this.state.gifs.data} />;
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default App;
