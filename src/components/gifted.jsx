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
    defaultSearchValue: "I don't know what I'm doing",
    lastSearchValue: "",
    offset: 0
  };

  // On first mount, use default search value
  componentDidMount() {
    this.searchGifs(this.state.defaultSearchValue);
  }

  //--- Get a random gif ---//
  randomGif = async () => {
    let json = await getRandomGif();
    this.setState({ gifs: json, type: "random", offset: 0 });
  };

  //--- Get trending gifs ---//
  trendingGifs = async offsetValue => {
    // Reset pagination offset to 0 if 0 passed in, otherwise use state.offset value
    let offset = offsetValue === 0 ? offsetValue : this.state.offset;
    let json = await getTrendingGifs(offset);
    this.setState({ gifs: json, type: "trending", offset: offset });
  };

  //--- Get searched gifs ---//
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

  //--- Pagination ---//
  // Switch between trending and search pagination
  typeSwitch() {
    switch (this.state.type) {
      case "search":
        this.searchGifs(this.state.lastSearchValue);
        break;
      case "trending":
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

  // Handles offset increments for pagination
  handleIncrement = () => {
    this.setState({
      offset: this.state.offset + Giphy.limit
    });
  };

  // Handles offset decrements for pagination
  handleDecrement = () => {
    if (this.state.offset !== 0) {
      this.setState({
        offset: this.state.offset - Giphy.limit
      });
    }
  };

  // Hides pagination buttons on randomGif
  hidePagination() {
    //dynamic hide of pagination buttons
    let paginationClass = "page-btn";
    paginationClass += this.state.type === "random" ? " hide" : "";
    return paginationClass;
  }
  addLeftClassName = () => {
    const base = this.hidePagination();
    return base + " left";
  };

  addRightClassName = () => {
    const base = this.hidePagination();
    return base + " right";
  };

  //--- Determines App Body ---//
  getAppBody = () => {
    if (_.isEmpty(this.state.gifs)) {
      return null;
    } else if (this.state.type !== "random") {
      return <GifList gifs={this.state.gifs.data} play={this.state.playBool} />;
    } else {
      return <SingleGif gif={this.state.gifs.data} />;
    }
  };

  // Render
  render() {
    // Passes gif data to giflist and renders
    return (
      <div className="App">
        <SearchBar
          handleSearchClick={this.searchGifs}
          onFormSubmit={this.searchGifs}
        />
        <div className="btn-wrapper">
          <button className={this.addLeftClassName()} onClick={this.pageDown}>
            &lt;
          </button>
          <button className="btn-middle" onClick={() => this.trendingGifs(0)}>
            Trending
          </button>
          <button className="btn-middle" onClick={this.randomGif}>
            Random
          </button>
          <button className={this.addRightClassName()} onClick={this.pageUp}>
            &gt;
          </button>
        </div>
        <div className="wrapper">{this.getAppBody()}</div>
        <div className="btn-wrapper">
          <button className={this.addLeftClassName()} onClick={this.pageDown}>
            &lt;
          </button>
          <button className={this.addRightClassName()} onClick={this.pageUp}>
            &gt;
          </button>
        </div>
      </div>
    );
  }
}

export default Gifted;
