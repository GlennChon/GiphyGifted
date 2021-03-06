import React, { Component } from "react";
import _ from "lodash";
import {
  getGifs,
  getTrendingGifs,
  getRandomGif
} from "./services/giphyService";
import GifList from "./components/gifList";
import SingleGif from "./components/singleGif";
import SearchBar from "./components/searchBar";
import Giphy from "./services/config";
import "./css/App.css";
import logo from "./gift.png";

class App extends Component {
  state = {
    gifs: {},
    type: null,
    defaultSearchValue: "I don't know what I'm doing",
    lastSearchValue: "",
    offset: 0,
    autoPlay: false
  };

  // On first mount, use default search value
  componentDidMount() {
    this.searchGifs(this.state.defaultSearchValue);
  }

  onPlayGif = () => {
    this.setState({ autoPlay: !this.state.autoPlay });
  };

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

  paginateSearch = async () => {
    let json = await getGifs(this.state.lastSearchValue, this.state.offset);
    this.setState({
      gifs: json,
      type: "search"
    });
  };

  //--- Get searched gifs ---//
  searchGifs = async searchValue => {
    // if the searchValue is empty or the same as the defaultValue, use defaultValue,
    // otherwise use tew terms
    let value = searchValue;
    let offset = 0;

    if (searchValue === "") {
      value = this.state.defaultSearchValue;
    } else if (searchValue === this.state.lastSearchValue) {
      return;
    }
    let json = await getGifs(value, offset);
    this.setState({
      gifs: json,
      lastSearchValue: value,
      type: "search",
      offset
    });
  };

  //--- Pagination ---//
  // Switch between trending and search pagination
  typeSwitch() {
    switch (this.state.type) {
      case "search":
        this.paginateSearch();
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
      return (
        <GifList gifs={this.state.gifs.data} isAutoPlay={this.state.autoPlay} />
      );
    } else {
      return (
        <SingleGif
          gif={this.state.gifs.data}
          isAutoPlay={this.state.autoPlay}
        />
      );
    }
  };

  // Render
  render() {
    // Passes gif data to giflist and renders
    return (
      <div className="App">
        <div className="App-logo-wrapper">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-logo-txt">GIFt'ed</h1>
        </div>
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
          <button className="btn-middle" onClick={this.onPlayGif}>
            Play All
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

export default App;
// import React, { Component } from "react";
// import { render } from "react-dom";
// //import Hello from "./Hello";
// import TextField from "@material-ui/core/TextField";
// const themeRole = [
//   {
//     id: 1,
//     value: "name1"
//   },
//   {
//     id: 2,
//     value: "name2"
//   }
// ];
// class App extends Component {
//   state = {
//     question: "",
//     abc: []
//   };
//   handleChange = e => {
//     this.setState({ abc: e.target.value });
//     console.log(this.state.abc);
//   };

//   render() {
//     const { open, toggle } = this.state;

//     return (
//       <div>
//         {themeRole.map((role, i) => (
//           <div>
//             <TextField
//               label="Select"
//               value={this.state[role.id]}
//               onChange={this.handleChange}
//               helperText="Please select your priority"
//               margin="dense"
//               variant="outlined"
//             />
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default App;
