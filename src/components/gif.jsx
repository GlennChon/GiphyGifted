import React from "react";

const Gif = ({ gif }) => {
  const gifImg = gif.images.fixed_height_still;
  return (
    <React.Fragment>
      <img src={gifImg.url} height={gifImg.height} width={gifImg.width} />
    </React.Fragment>
  );
};

export default Gif;
