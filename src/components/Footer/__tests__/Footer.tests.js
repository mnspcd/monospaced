/* eslint-env jest */
import React from "react";
import { render } from "enzyme";

import Footer from "../Footer";

describe("Footer component", () => {
  beforeAll(
    (global.Date = () => {
      return {
        getFullYear: () => "2018",
      };
    }),
  );

  it("should render correctly", () => {
    const component = render(<Footer copyright="copyright" />);
    expect(component).toMatchSnapshot();
  });

  it("should render links correctly", () => {
    const component = render(
      <Footer
        copyright="copyright"
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
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
