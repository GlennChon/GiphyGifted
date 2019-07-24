import React from "react";
import GifPlayer from "react-gif-player";
import "./css/gif.css";

// Return responsive react fragment of gifs
const Gif = ({ gif, type }) => {
  const gifImgObj = gif.images;
  const gifImgType =
    type === "fixed-height"
      ? gifImgObj.fixed_height_downsampled
      : gifImgObj.fixed_width_downsampled;
  const stillImg =
    type === "fixed-height"
      ? gifImgObj.fixed_height_still
      : gifImgObj.fixed_width_still;

  return (
    <React.Fragment>
      <div className="container-gif">
        <GifPlayer gif={gifImgType.url} still={stillImg.url} autoplay={true} />
      </div>
    </React.Fragment>
  );
};

export default Gif;
