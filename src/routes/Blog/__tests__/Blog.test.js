import React from "react";
import { shallow } from "enzyme";

import content from "../../__mocks__/content";
import Blog from "../Blog";

describe("Blog component", () => {
  it("should render correctly", () => {
    const component = shallow(<Blog content={content} />);
    expect(component).toMatchSnapshot();
  });
});
