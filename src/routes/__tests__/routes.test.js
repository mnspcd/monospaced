/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";
import { createMemoryHistory, Router } from "react-router";
import reactRouterToArray from "react-router-to-array";

import routes, { App } from "..";

jest.mock("../content");

describe("Routes", () => {
  it("should render App correctly", () => {
    const { container } = render(
      <App
        route={{
          content: {
            footer: { links: [] },
            meta: { title: "foo" },
          },
        }}
        routes={[]}
      >
        <div />
      </App>,
    );

    expect(container).toMatchSnapshot();
  });

  it("should convert correctly to an array", () => {
    const container = reactRouterToArray(routes);

    expect(container).toMatchInlineSnapshot(`
      Array [
        "/",
        "/blog",
        "/slug",
        "/legal",
        "/404",
      ]
    `);
  });

  it("should force trailing slashes on urls", () => {
    const history = createMemoryHistory("/foo");
    render(<Router history={history} routes={routes} />);

    expect(history.getCurrentLocation().pathname).toBe("/foo/");

    history.push("/bar");

    expect(history.getCurrentLocation().pathname).toBe("/bar/");
  });
});
