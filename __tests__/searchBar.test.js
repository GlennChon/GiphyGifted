import React from "react";
import SearchBar from "../src/components/searchBar";

describe("<SearchBar/>", () => {
  test("testing component snapshot", () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.exists()).toBe(true);
  });
});
