import React from "react";
import GifList from "../src/components/gifList";

describe("<GifList/>", () => {
  test("testing component snapshot", () => {
    const wrapper = shallow(<GifList gifs={gifs} />);
    expect(wrapper).toMatchSnapshot();
  });
});

const gifs = [
  {
    images: {
      fixed_height_downsampled: { url: "fhdUrl" },
      fixed_width_downsampled: { url: "fwdUrl" },
      fixed_height_still: { url: "fhsUrl" },
      fixed_width_still: { url: "fwsURL" }
    }
  },
  {
    images: {
      fixed_height_downsampled: { url: "fhdUrl" },
      fixed_width_downsampled: { url: "fwdUrl" },
      fixed_height_still: { url: "fhsUrl" },
      fixed_width_still: { url: "fwsURL" }
    }
  },
  {
    images: {
      fixed_height_downsampled: { url: "fhdUrl" },
      fixed_width_downsampled: { url: "fwdUrl" },
      fixed_height_still: { url: "fhsUrl" },
      fixed_width_still: { url: "fwsURL" }
    }
  }
];
