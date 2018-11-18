import React from "react";
import { Route, Router } from "react-router";
import createMemoryHistory from "react-router/lib/createMemoryHistory";
import { number, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Masthead from "./Masthead";

import { Heading } from "../Markdown";
import Logotype from "../Logotype";

const history = createMemoryHistory();

storiesOf("Components/Masthead", module)
  .addDecorator(story => {
    const route = <Route component={() => story()} path="*" />;

    class RenderRouter extends React.Component {
      render() {
        return <Router history={history}>{route}</Router>;
      }
    }

    return <RenderRouter />;
  })
  .add("Component", () => {
    const numberOfItems = number(
      "number of links",
      3,
      {
        range: true,
        min: 1,
        max: 5,
      },
      "Story",
    );

    return (
      <div>
        <Masthead
          headingLevel={
            select(
              "headingLevel",
              [""].concat(Heading.levels),
              "",
              "Masthead",
            ) || null
          }
          links={[...Array(numberOfItems).keys()].map(i => ({
            href: text("link href", "https://example.com", "Masthead"),
            text: `${text("link text", "item", "Masthead")}-${i + 1}`,
          }))}
          logo={<Logotype height="1.5em" />}
        />
      </div>
    );
  });
