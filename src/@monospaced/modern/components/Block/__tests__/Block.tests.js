/* eslint-env jest */
import { shallow } from "enzyme";
import React from "react";

import Block from "../Block";

describe("Block component", () => {
  it("should render correctly", () => {
    expect(shallow(<Block>children</Block>)).toMatchSnapshot();
  });
});
