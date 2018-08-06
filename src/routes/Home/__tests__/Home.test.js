import React from "react";
import { shallow } from "enzyme";

import content from "../../__mocks__/content";
import Home from "../Home";

describe("Home component", () => {
  it("should render correctly", () => {
    const component = shallow(<Home content={content} />);
    expect(component).toMatchSnapshot();
  });
});
