import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("Header", () => {
  it("component renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("should renders a h1, img", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists("img")).toEqual(true);
    expect(
      wrapper.containsMatchingElement(<h1>School dashboard</h1>)
    ).toBeEqual(true);
  });
});
