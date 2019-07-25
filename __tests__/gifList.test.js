import React from "react";
import GifList from "../src/components/gifList";
import { gifArrayObj } from "../__mocks__/gifArrayObj";

describe("<GifList/>", () => {
  it("testing component snapshot", () => {
    const wrapper = shallow(<GifList gifs={gifArrayObj} />);
    expect(wrapper).toMatchSnapshot();
  });
});
