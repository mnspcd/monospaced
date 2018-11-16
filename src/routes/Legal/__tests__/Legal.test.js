import React from "react";
import { shallow } from "enzyme";

import content from "../../__mocks__/content";
import Legal from "../Legal";

describe("Legal component", () => {
  it("should render correctly", () => {
    const component = shallow(<Legal content={content} />);
    expect(component).toMatchSnapshot();
  });
});
