import React from "react";
import SingleGif from "../src/components/singleGif";

const gif = {
  images: {
    fixed_height_downsampled: { url: "fhdUrl" },
    fixed_width_downsampled: { url: "fwdUrl" },
    fixed_height_still: { url: "fhsUrl" },
    fixed_width_still: { url: "fwsURL" }
  }
};

describe("<singleGif/>", () => {
  test("testing component snapshot", () => {
    const wrapper = shallow(<singleGif gif={gif} />);
    expect(wrapper).toMatchSnapshot();
  });
});
