/* eslint-env jest */
import { shallow } from "enzyme";

import {
  basic,
  color,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  level,
} from "../Heading.stories";

describe("Heading component", () => {
  it("should render correctly", () => {
    const component = shallow(basic());
    expect(component).toMatchSnapshot();
  });

  it("should render heading color correctly", () => {
    const component = shallow(color());
    expect(component).toMatchSnapshot();
  });

  it("should render heading level correctly", () => {
    const component = shallow(level());
    expect(component).toMatchSnapshot();
  });

  it("should render an H1 correctly", () => {
    const component = shallow(h1());
    expect(component).toMatchSnapshot();
  });

  it("should render an H2 correctly", () => {
    const component = shallow(h2());
    expect(component).toMatchSnapshot();
  });

  it("should render an H3 correctly", () => {
    const component = shallow(h3());
    expect(component).toMatchSnapshot();
  });

  it("should render an H4 correctly", () => {
    const component = shallow(h4());
    expect(component).toMatchSnapshot();
  });

  it("should render an H5 correctly", () => {
    const component = shallow(h5());
    expect(component).toMatchSnapshot();
  });

  it("should render an H6 correctly", () => {
    const component = shallow(h6());
    expect(component).toMatchSnapshot();
  });
});
