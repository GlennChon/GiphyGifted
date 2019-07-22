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
    listSize: 0,
    defaultValue: "I dont know what Im doing"
  };

  // On first mount, use default search value
  componentDidMount() {
    this.updateGifs(this.state.defaultValue);
  }

  // Get gifs and set state, if input is "" then get state.defaultValue
  async updateGifs(searchValue) {
    if (searchValue.trim() !== "") {
      let json = await getGifs(searchValue);
      let length = json.data.length;
      console.log(length);
      this.setState({ gifs: json, listSize: length });
    } else {
      this.updateGifs(this.state.defaultValue);
    }
  }

  render() {
    let appBody;
    const updateGifs = _.debounce(searchvalue => {
      this.updateGifs(searchvalue);
    }, 200);
    if (this.state.listSize > 1) {
      appBody = <GifList gifs={this.state.gifs.data} />;
    } else if (this.state.listSize === 0) {
      appBody = <div>1 Gif Random Frangment Coming Soon</div>;
    } else {
      appBody = <h1>Nothing found, try a different search.</h1>;
    }

    // Passes gif data to giflist and renders
    return (
      <div className="App">
        <SearchBar onChange={searchValue => updateGifs(searchValue)} />
        {appBody}
      </div>
    );
  }
}

export default App;
