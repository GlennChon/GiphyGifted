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
import Giphy from "../services/config";
import "./gifted.css";

class Gifted extends Component {
  state = {
    gifs: {},
    type: null,
    lastSearchValue: "",
    playBool: true,
    offset: 0
  };

  // On first mount, use default search value
  componentDidMount() {
    this.searchGifs(this.state.defaultValue);
  }

  // Get a random gif
  randomGif = async () => {
    let json = await getRandomGif();

    this.setState({ gifs: json, type: "random", offset: 0 });
  };

  // Get trending gifs
  trendingGifs = async offsetValue => {
    // Reset pagination offset to 0 if 0 passed in, otherwise use state.offset value
    let offset = offsetValue === 0 ? offsetValue : this.state.offset;
    let json = await getTrendingGifs(offset);

    this.setState({ gifs: json, type: "trending", offset: offset });
  };

  // Get searched gifs and set state, if input is "" then get state.defaultValue
  searchGifs = async searchValue => {
    // if the searchValue is empty or the same as the defaultValue, use defaultValue,
    // otherwise use tew terms
    console.log(searchValue);
    const value =
      searchValue === this.state.lastSearchValue
        ? this.state.lastSearchValue
        : searchValue;
    let json = await getGifs(value, this.state.offset);
    this.setState({ gifs: json, lastSearchValue: value, type: "search" });
  };

  // Pagination
  typeSwitch() {
    switch (this.state.type) {
      case "search":
        console.log(this.state.type + ":", this.state.offset);
        console.log(this.state.lastSearchValue);
        this.searchGifs();
        break;
      case "trending":
        console.log(this.state.type + ":", this.state.offset);
        this.trendingGifs();
        break;
      default:
        return null;
    }
  }
  pageUp = async () => {
    await this.handleIncrement();
    this.typeSwitch();
  };

  pageDown = async () => {
    await this.handleDecrement();
    this.typeSwitch();
  };

  handleIncrement = () => {
    this.setState({
      offset: this.state.offset + Giphy.limit
    });
  };

  handleDecrement = () => {
    if (this.state.offset !== 0) {
      this.setState({
        offset: this.state.offset - Giphy.limit
      });
    }
  };

  // Render
  render() {
    let appBody;
    //dynamic hide of pagination buttons
    let paginationClass = "page-btn";
    paginationClass += this.state.type === "random" ? " hide" : "";

    //TODO: Need to take a look at this
    // https://stackoverflow.com/questions/23123138/perform-debounce-in-react-js
    if (_.isEmpty(this.state.gifs)) {
      return null;
    } else if (this.state.type !== "random") {
      appBody = (
        <GifList gifs={this.state.gifs.data} play={this.state.playBool} />
      );
    } else {
      appBody = <SingleGif gif={this.state.gifs.data} />;
    }

    // Passes gif data to giflist and renders
    return (
      <div className="App">
        <SearchBar handleSearchClick={this.searchGifs} />
        <div className="btn-wrapper">
          <button className="left" onClick={() => this.trendingGifs(0)}>
            Trending
          </button>
          <button className="right" onClick={this.randomGif}>
            Random
          </button>
        </div>
        <div className="content-wrapper">
          <button className={paginationClass} onClick={this.pageDown}>
            &lt;
          </button>
          {appBody}
          <button className={paginationClass} onClick={this.pageUp}>
            &gt;
          </button>
        </div>
      </div>
    );
  }
}

export default Gifted;
