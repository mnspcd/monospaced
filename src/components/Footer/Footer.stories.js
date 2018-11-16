import React from "react";
import { number, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Footer from "./Footer";

storiesOf("Components/Footer", module).add("Component", () => {
  const numberOfItems = number(
    "number of links",
    3,
    {
      range: true,
      min: 1,
      max: 7,
    },
    "Story",
  );
  const copyright = text("copyright", "Monospaced", "Footer");

  return (
    <Footer
      copyright={copyright}
      links={[...Array(numberOfItems).keys()].map(i => ({
        href: text("link href", "https://example.com", "Footer"),
        text: `${text("link text", "item", "Footer")}-${i + 1}`,
      }))}
    />
  );
});
