import React, { Component } from "react";
import Gif from "./gif";
import "../css/gifList.css";

// Returns react fragment list container of gif divs
class GifList extends Component {
  mapGifList = isAutoPlay => {
    return this.props.gifs.map((gif, i) => (
      <div key={i}>
        <Gif
          key={gif.id + isAutoPlay.toString()}
          gif={gif}
          type="fixed-width"
          isAutoPlay={isAutoPlay}
        />
      </div>
    ));
  };

  render() {
    return (
      <React.Fragment>{this.mapGifList(this.props.isAutoPlay)}</React.Fragment>
    );
  }
}

export default GifList;
