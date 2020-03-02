import React from "react";
import Gif from "../src/components/gif";
import { gifArrayObj } from "../__mocks__/gifArrayObj";

describe("<Gif/>", () => {
  // check render

  it("testing component snapshot", () => {
    const type = "fixed-height";
    const wrapper = shallow(<Gif gif={gifArrayObj[0]} type={type} />);
    expect(wrapper).toMatchSnapshot();
  });
});
