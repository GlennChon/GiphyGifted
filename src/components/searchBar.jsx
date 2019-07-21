import React, { Component } from "react";

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
            type="text"
            placeholder="Giphy Search"
            value={this.state.searchValue}
            onChange={e => this.handleInputChange(e.target.value)}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
