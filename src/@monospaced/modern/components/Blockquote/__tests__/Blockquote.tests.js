/* eslint-env jest */
import { shallow } from "enzyme";

import { basic } from "../Blockquote.stories";

describe("Blockquote component", () => {
  it("should render correctly", () => {
    expect(shallow(basic())).toMatchSnapshot();
  });
});
