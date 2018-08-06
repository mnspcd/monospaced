import React from "react";
import { number, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Masthead from "./Masthead";

import { Heading } from "../Markdown";
import Logotype from "../Logotype";

storiesOf("Components/Masthead", module).add("Component", () => {
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
          select("headingLevel", [""].concat(Heading.levels), "", "Masthead") ||
          null
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
