import React from "react";
import Gif from "./gif";

// Return responsive react fragment of gif
const SingleGif = ({ gif }) => {
  return (
    <React.Fragment>
      <Gif gif={gif} type="fixed-height" />
    </React.Fragment>
  );
};

export default SingleGif;
