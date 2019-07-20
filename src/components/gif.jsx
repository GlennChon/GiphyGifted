import React from "react";

// Return react fragment of gif stills
const Gif = ({ gif }) => {
  const gifImg = gif.images.fixed_height_still;
  return (
    <React.Fragment>
      <img
        className="gif_img"
        src={gifImg.url}
        height={gifImg.height}
        width={gifImg.width}
      />
    </React.Fragment>
  );
};

export default Gif;
