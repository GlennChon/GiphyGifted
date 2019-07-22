import React from "react";

// Return responsive react fragment of gifs
const SingleGif = ({ gif }) => {
  const gifImg = gif.images.downsized;

  return (
    <React.Fragment>
      <div className="container-gif">
        <img src={gifImg.url} height={gifImg.height} alt={gifImg.alt} />
      </div>
    </React.Fragment>
  );
};

export default SingleGif;
