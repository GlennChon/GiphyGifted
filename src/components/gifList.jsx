import React from "react";
import Gif from "./gif";

// Returns react fragment list container of gif divs
const GifList = ({ gifs }) => {
  // Map gif objects with key since react requires that
  const gifList = gifs.map((gif, i) => (
    <div key={i}>
      <Gif key={gif.id} gif={gif} />
    </div>
  ));
  return (
    <React.Fragment>
      <div className="gif_lst_container">{gifList}</div>
    </React.Fragment>
  );
};
export default GifList;
