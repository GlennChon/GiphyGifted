import React from "react";
import SingleGif from "../src/components/singleGif";
import { gifArrayObj } from "../__mocks__/gifArrayObj";

describe("<SingleGif/>", () => {
  it("testing component snapshot", () => {
    const wrapper = shallow(<SingleGif gif={gifArrayObj[0]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("testing component render", () => {
    const wrapper = shallow(<SingleGif />);
    expect(wrapper.exists()).toBe(true);
  });
});
