import React, { Component } from "react";
import "./searchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "I don't know what I'm doing"
    };
  }

  handleChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearchClick(this.state.searchValue);
  };

  render() {
    return (
      <React.Fragment>
        <input
          type="search"
          placeholder="GIFt'ed Search"
          onChange={this.handleChange}
          value={this.state.searchValue}
        />
        <button
          type="submit"
          className="search-btn"
          onClick={this.handleSubmit}
        >
          Search
        </button>
      </React.Fragment>
    );
  }
}

export default SearchBar;
