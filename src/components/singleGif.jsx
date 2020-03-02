import React from "react";
import Gif from "./gif";

// Return responsive react fragment of gif
const SingleGif = ({ gif, isAutoPlay }) => {
  console.log(isAutoPlay);
  return (
    <React.Fragment>
      <Gif
        gif={gif}
        key={isAutoPlay.toString()}
        type="fixed-height"
        isAutoPlay={isAutoPlay}
      />
    </React.Fragment>
  );
};

export default SingleGif;
