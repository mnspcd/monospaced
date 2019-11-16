/* eslint-env jest */
import { shallow } from "enzyme";
import React from "react";
import { createMemoryHistory, Router } from "react-router";
import reactRouterToArray from "react-router-to-array";
import renderer from "react-test-renderer";

import routes, { App } from "../";

jest.mock("../content");

describe("Routes", () => {
  it("should render App correctly", () => {
    expect(
      shallow(
        <App
          route={{
            content: {
              footer: { links: [] },
              meta: { title: "foo" },
            },
          }}
          routes={reactRouterToArray(routes).map(route => {
            return { path: route };
          })}
        >
          <div />
        </App>,
      ),
    ).toMatchSnapshot();
  });

  it("should convert correctly to an array", () => {
    const array = renderer.create(reactRouterToArray(routes)).toJSON();
    expect(array).toMatchSnapshot();
  });

  it("should force trailing slashes on urls", () => {
    const history = createMemoryHistory("/foo");
    shallow(<Router history={history} routes={routes} />);
    expect(history.getCurrentLocation().pathname).toBe("/foo/");
    history.push("/bar");
    expect(history.getCurrentLocation().pathname).toBe("/bar/");
  });
});
