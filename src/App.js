import React, { Component } from "react";
import "./App.css";
import _ from "lodash";
import { getGifs } from "./services/giphyService";
import GifList from "./components/gifList";
import SearchBar from "./components/searchBar";

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
  }

  render() {
    const updateGifs = _.debounce(searchvalue => {
      this.updateGifs(searchvalue);
    }, 200);

    if (this.state.gifs.data) {
      // Passes gif data to giflist and renders
      return (
        <div className="App">
          <SearchBar onChange={searchValue => updateGifs(searchValue)} />
          <GifList gifs={this.state.gifs.data} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;
