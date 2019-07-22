import React from "react";
import Gif from "./gif";
import "./gifList.css";

// Returns react fragment list container of gif divs
const GifList = ({ gifs }) => {
  // Map gif objects with keys
  const gifList = gifs.map((gif, i) => (
    <div key={i}>
      <Gif key={gif.id} gif={gif} />
    </div>
  ));
  return (
    <React.Fragment>
      <div className="wrapper">{gifList}</div>
    </React.Fragment>
  );
};
export default GifList;
