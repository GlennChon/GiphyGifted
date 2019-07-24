import React from "react";

it("testing component render", () => {
  const wrapper = shallow(<Gifted />);
  expect(wrapper.exists()).toBe(true);
});
