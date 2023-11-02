import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";
import { getFooterCopy, getFullYear } from "../utils/utils";

describe("Footer", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("should render the text copyright", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toEqual(
      `Copyright ${getFullYear()} - ${getFooterCopy()}`
    );
  });
});
