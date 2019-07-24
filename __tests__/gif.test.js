import React from "react";
import Gif from "../src/components/gif";

const gif = {
  images: {
    fixed_height_downsampled: { url: "fhdUrl" },
    fixed_width_downsampled: { url: "fwdUrl" },
    fixed_height_still: { url: "fhsUrl" },
    fixed_width_still: { url: "fwsURL" }
  }
};

describe("<Gif/>", () => {
  test("testing component snapshot", () => {
    const type = "fixed-height";
    const wrapper = shallow(<Gif gif={gif} type={type} />);
    expect(wrapper).toMatchSnapshot();
  });
});
