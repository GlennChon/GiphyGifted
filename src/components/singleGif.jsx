import React from "react";
import Gif from "./gif";

// Return responsive react fragment of gifs
const SingleGif = ({ gif }) => {
  return (
    <React.Fragment>
      <Gif gif={gif} type="fixed-height" />
    </React.Fragment>

    //add share link
  );
};

export default SingleGif;
