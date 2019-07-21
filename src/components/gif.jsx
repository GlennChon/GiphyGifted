import React from "react";

// Return responsive react fragment of gifs
const Gif = ({ gif }) => {
  const gifImg = gif.images.fixed_width;
  return (
    <React.Fragment>
      <div className="container-gif center-vertical">
        <img className="" src={gifImg.url} height={gifImg.height} />
      </div>
    </React.Fragment>
  );
};

export default Gif;
