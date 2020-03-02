import React from "react";
import GifPlayer from "react-gif-player";
import "../css/gif.css";

// Return responsive react fragment of gifs
const Gif = ({ gif, type, isAutoPlay }) => {
  const gifImgObj = gif.images;
  const gifImgType =
    type === "fixed-height"
      ? gifImgObj.fixed_height_downsampled
      : gifImgObj.fixed_width_downsampled;
  const stillImg =
    type === "fixed-height"
      ? gifImgObj.fixed_height_still
      : gifImgObj.fixed_width_still;

  const styles = {
    height: `${gif.images.fixed_width_still.height}px`,
    width: `${gif.images.fixed_width_still.width}px`,
    background: "red"
  };

  return (
    <React.Fragment>
      <div className="container-gif">
        <div style={styles}>
          <GifPlayer
            gif={gifImgType.url}
            still={stillImg.url}
            autoplay={isAutoPlay}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Gif;
