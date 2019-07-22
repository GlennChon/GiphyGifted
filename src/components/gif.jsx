import React from "react";
import "./gif.css";

// Return responsive react fragment of gifs
const Gif = ({ gif }) => {
  const gifImg = gif.images.fixed_width_downsampled;

  return (
    <React.Fragment>
      <div className="container-gif">
        <img src={gifImg.url} height={gifImg.height} alt={gifImg.alt} />
      </div>
    </React.Fragment>
  );
};

export default Gif;
