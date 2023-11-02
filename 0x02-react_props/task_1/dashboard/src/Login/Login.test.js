import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";

describe("Login", () => {
  it("component renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("should contains 2 inputs and 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label")).toHaveLength(2);
    expect(wrapper.find("input")).toHaveLength(2);
  });
});
