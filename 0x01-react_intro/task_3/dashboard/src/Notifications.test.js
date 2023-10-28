import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notification Component Test", () => {
  it("renders notifications components without crashing", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications).toBeDefined();
  });

  it("renders a ul", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find("ul")).toBeDefined();
  });

  it("renders three list", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find("li")).toHaveLength(3);
  });

  it("renders a text", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find("p").text()).toBe(
      "Here is the list of notifications"
    );
  });
});
