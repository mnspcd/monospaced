/* eslint-env jest */
import React from "react";
import { render } from "enzyme";

import Masthead from "../Masthead";

describe("Masthead component", () => {
  it("should render correctly", () => {
    const component = render(<Masthead logo={<div />} />);
    expect(component).toMatchSnapshot();
  });

  it("should render heading level correctly", () => {
    const component = render(<Masthead headingLevel="1" logo={<div />} />);
    expect(component).toMatchSnapshot();
  });

  it("should render single link correctly", () => {
    const component = render(
      <Masthead
        links={[
          {
            href: "href",
            text: "text",
          },
        ]}
        logo={<div />}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it("should render links correctly", () => {
    const component = render(
      <Masthead
        links={[
          {
            href: "href",
            routerLink: true,
            text: "text",
          },
          {
            href: "href",
            text: "text",
          },
        ]}
        logo={<div />}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
