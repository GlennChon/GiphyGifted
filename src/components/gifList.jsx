import React, { Component } from "react";
import Gif from "./gif";
import "../css/gifList.css";

// Returns react fragment list container of gif divs
class GifList extends Component {
  mapGifList = () => {
    return this.props.gifs.map((gif, i) => (
      <div key={i}>
        <Gif key={gif.id} gif={gif} type="fixed-width" isAutoPlay={false} />
      </div>
    ));
  };

  render() {
    return <React.Fragment>{this.mapGifList(this.props.gifs)}</React.Fragment>;
  }
}

export default GifList;
