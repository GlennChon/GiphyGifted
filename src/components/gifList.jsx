import React, { Component } from "react";
import Gif from "./gif";
import "./gifList.css";

// Returns react fragment list container of gif divs
class GifList extends Component {
  mapGifList = () => {
    return this.props.gifs.map((gif, i) => (
      <div key={i}>
        <Gif key={gif.id} gif={gif} type="fixed-width" />
      </div>
    ));
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">{this.mapGifList(this.props.gifs)}</div>
      </React.Fragment>
    );
  }
}

export default GifList;
