import React from "react";
import App from "../src/App.js";

describe("<App/>", () => {
  // pagination, page up, page down
  // trending, random, search clicks
  it("testing component render", () => {
    const jsdomAlert = window.alert;
    window.alert = () => {};
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);

    window.alert = jsdomAlert;
  });
});
