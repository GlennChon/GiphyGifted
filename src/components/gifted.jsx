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
    // First real react project, appropriate default search text
    defaultValue: "I don't know what I'm doing",
    lastSearchValue: "",
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

  // Get gifs and set state, if input is "" then get state.defaultValue
  searchGifs = async searchValue => {
    // if the searchValue is empty or the same as the defaultValue, use defaultValue,
    // otherwise use tew terms
    let value =
      searchValue === "" || searchValue === this.state.defaultValue
        ? this.state.defaultValue
        : this.state.lastSearchValue;

    let json = await getGifs(value, this.state.offset);

    this.setState({ gifs: json, type: "search" });
  };

  // Pagination
  typeSwitch = async () => {
    switch (this.state.type) {
      case "search":
        console.log(this.state.type + ":", this.state.offset);
        console.log(this.state.lastSearchValue);
        await this.searchGifs();
        break;
      case "trending":
        console.log(this.state.type + ":", this.state.offset);
        await this.trendingGifs();
        break;
      default:
        return null;
    }
  };
  pageUp = async () => {
    await this.handleIncrement();
    await this.typeSwitch();
  };

  pageDown = async () => {
    await this.handleDecrement();
    await this.typeSwitch();
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

    const searchGifs = _.debounce(searchvalue => {
      this.searchGifs(searchvalue, this.state.offset);
    }, 650);

    if (_.isEmpty(this.state.gifs)) {
      return null;
    } else if (this.state.type !== "random") {
      appBody = <GifList gifs={this.state.gifs.data} />;
    } else {
      appBody = <SingleGif gif={this.state.gifs.data} />;
    }

    // Passes gif data to giflist and renders
    return (
      <div className="App">
        <SearchBar
          onChange={searchValue => {
            this.setState({ lastSearchValue: searchValue, offset: 0 });
            searchGifs(searchValue, this.state.offset);
          }}
        />
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
