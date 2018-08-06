import React from "react";
import { render } from "enzyme";

import Toc from "../Toc";

describe("Toc component", () => {
  it("should render correctly", () => {
    const component = render(
      <Toc>
        <Toc.Item title="title" />
      </Toc>,
    );
    expect(component).toMatchSnapshot();
  });

  it("should render date correctly", () => {
    const component = render(
      <Toc>
        <Toc.Item date="2018-11-15" title="title" />
      </Toc>,
    );
    expect(component).toMatchSnapshot();
  });

  it("should render slug correctly", () => {
    const component = render(
      <Toc>
        <Toc.Item slug="path" title="title" />
      </Toc>,
    );
    expect(component).toMatchSnapshot();
  });
});
