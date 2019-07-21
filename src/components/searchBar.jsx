import React, { Component } from "react";
import "./searchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }

  handleInputChange(searchValue) {
    this.setState({ searchValue });
    this.props.onChange(searchValue);
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <input
            type="search"
            placeholder="GIFt'ed Search"
            value={this.state.searchValue}
            onChange={e => this.handleInputChange(e.target.value)}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
