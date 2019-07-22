import React, { Component } from "react";
import _ from "lodash";
import {
  getGifs,
  getTrendingGifs,
  getRandomGif
} from "../services/giphyService";
import GifList from "./gifList";
import SingleGif from "./singleGif";
import SearchBar from "./searchBar";
import "./gifted.css";

class Gifted extends Component {
  state = {
    gifs: {},
    isRandom: true,
    // First real react project, appropriate default search text
    defaultValue: "I don't know what I'm doing"
  };

  // On first mount, use default search value
  componentDidMount() {
    this.searchGifs(this.state.defaultValue);
  }
  // Get a random gif
  async randomGif() {
    let json = await getRandomGif();

    this.setState({ gifs: json, isRandom: true });
  }

  // Get trending gifs
  async trendingGifs() {
    let json = await getTrendingGifs();

    this.setState({ gifs: json, isRandom: false });
  }
  // Get gifs and set state, if input is "" then get state.defaultValue
  async searchGifs(searchValue) {
    let json;

    if (searchValue.trim() === "") {
      json = await getGifs(this.state.defaultValue);
    } else {
      json = await getGifs(searchValue);
    }

    this.setState({ gifs: json, isRandom: false });
  }

  render() {
    let appBody;
    const searchGifs = _.debounce(searchvalue => {
      this.searchGifs(searchvalue);
    }, 650);

    console.log(this.state.gifs);

    if (!this.state.isRandom) {
      console.log(this.state.gifs.data);
      appBody = <GifList gifs={this.state.gifs.data} onClick />;
    } else if (!_.isEmpty(this.state.gifs)) {
      appBody = <SingleGif gif={this.state.gifs.data} />;
    }

    // Passes gif data to giflist and renders
    return (
      <div className="App">
        <SearchBar onChange={searchValue => searchGifs(searchValue)} />
        <div className="btn-wrapper">
          <button className="left" onClick={this.trendingGifs.bind(this)}>
            Trending
          </button>
          <button className="right" onClick={this.randomGif.bind(this)}>
            Random
          </button>
        </div>
        {appBody}
      </div>
    );
  }
}

export default Gifted;
