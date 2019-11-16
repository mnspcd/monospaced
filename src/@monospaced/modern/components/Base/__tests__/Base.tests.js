/* eslint-env jest */
import { shallow } from "enzyme";
import React from "react";

import Base from "../Base";

describe("Base component", () => {
  it("should render correctly", () => {
    expect(shallow(<Base>children</Base>)).toMatchSnapshot();
  });
});
