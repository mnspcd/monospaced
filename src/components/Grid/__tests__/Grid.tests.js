/* eslint-env jest */
import React from "react";
import { render } from "enzyme";

import Grid from "../Grid";

describe("Grid component", () => {
  it("should render correctly", () => {
    const component = render(
      <Grid>
        <Grid.Item>children</Grid.Item>
      </Grid>,
    );
    expect(component).toMatchSnapshot();
  });

  it("should render alignment correctly", () => {
    const component = render(
      <Grid>
        <Grid.Item align="center">children</Grid.Item>
      </Grid>,
    );
    expect(component).toMatchSnapshot();
  });

  it("should render colSpan correctly", () => {
    const component = render(
      <Grid>
        <Grid.Item colSpan="2">children</Grid.Item>
      </Grid>,
    );
    expect(component).toMatchSnapshot();
  });

  it("should render colStart correctly", () => {
    const component = render(
      <Grid>
        <Grid.Item colStart="2">children</Grid.Item>
      </Grid>,
    );
    expect(component).toMatchSnapshot();
  });

  it("should render justification correctly", () => {
    const component = render(
      <Grid>
        <Grid.Item justify="center">children</Grid.Item>
      </Grid>,
    );
    expect(component).toMatchSnapshot();
  });

  it("should render rowSpan correctly", () => {
    const component = render(
      <Grid>
        <Grid.Item rowSpan="2">children</Grid.Item>
      </Grid>,
    );
    expect(component).toMatchSnapshot();
  });

  it("should render rowStart correctly", () => {
    const component = render(
      <Grid>
        <Grid.Item rowStart="2">children</Grid.Item>
      </Grid>,
    );
    expect(component).toMatchSnapshot();
  });
});
