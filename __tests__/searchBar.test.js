import React from "react";
import SearchBar from "../src/components/searchBar";

describe("<SearchBar/>", () => {
  it("testing component render", () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.exists()).toBe(true);
  });
});
