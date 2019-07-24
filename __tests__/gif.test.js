import React from "react";
import Gif from "../src/components/gif";
import { create } from "react-test-renderer";

describe("My first snapshot test", () => {
  test("testing app button", () => {
    let tree = create(<Gif />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
