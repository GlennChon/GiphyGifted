import React, { Component } from "react";

class FilterButtons extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <span>
          <button outline>Outline</button>
          <button outline>Outline</button>
          <button outline active>
            Active
          </button>
        </span>
      </React.Fragment>
    );
  }
}

export default FilterButtons;
