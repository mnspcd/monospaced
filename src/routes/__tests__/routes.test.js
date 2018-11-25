/* eslint-env jest */
import { createMemoryHistory, Router } from "react-router";
import React from "react";
import reactRouterToArray from "react-router-to-array";
import renderer from "react-test-renderer";

import routes from "../../routes";

jest.mock("../content");

describe("Routes", () => {
  it("should convert correctly to an array", () => {
    const array = renderer.create(reactRouterToArray(routes)).toJSON();
    expect(array).toMatchSnapshot();
  });

  it("should force trailing slashes on urls", () => {
    const history = createMemoryHistory("/foo");
    renderer.create(<Router history={history} routes={routes} />);
    expect(history.getCurrentLocation().pathname).toBe("/foo/");
    history.push("/bar");
    expect(history.getCurrentLocation().pathname).toBe("/bar/");
  });
});
