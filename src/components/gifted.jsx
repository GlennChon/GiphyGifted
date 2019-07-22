import React, { Component } from "react";
import _ from "lodash";
import { getGifs } from "../services/giphyService";
import GifList from "./gifList";
import SearchBar from "./searchBar";
import FilterButtons from "./filterButtons";
class Gifted extends Component {
  state = {
    gifs: {},
    // First real react project, appropriate default search text
    listSize: 0,
    defaultValue: "I don't know what I'm doing"
  };

  // On first mount, use default search value
  componentDidMount() {
    this.updateGifs(this.state.defaultValue);
  }

  // Get gifs and set state, if input is "" then get state.defaultValue
  async updateGifs(searchValue) {
    let length = 0;
    let json;

    console.log(searchValue);
    if (searchValue.trim() === "") {
      json = await getGifs(this.state.defaultValue);
    } else {
      json = await getGifs(searchValue);
    }
    if (json) {
      length = json.data.length;
    }
    this.setState({ gifs: json, listSize: length });
  }
  render() {
    let appBody;
    const updateGifs = _.debounce(searchvalue => {
      this.updateGifs(searchvalue);
    }, 650);

    if (this.state.listSize > 1) {
      appBody = <GifList gifs={this.state.gifs.data} />;
    } else if (this.state.listSize === 1) {
      console.log(this.state.gifs.data);
      appBody = <div>1 Gif Random Frangment Coming Soon</div>;
      console.log("fragment needed here");
    }

    // Passes gif data to giflist and renders
    return (
      <div className="App">
        <SearchBar onChange={searchValue => updateGifs(searchValue)} />
        <FilterButtons />
        {appBody}
      </div>
    );
  }
}

export default Gifted;
