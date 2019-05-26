import { MDXProvider } from "@mdx-js/react";
import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Code from "./Code";
import Surface from "../../../Surface";
import MdxMockJsCode from "./__mocks__/code.js.mock.mdx";

storiesOf("Components/Markdown/Code", module)
  .add("Block", () => (
    <pre>
      <Code lightMode={boolean("lightMode", false)} block>
        {text("text", 'const foo = "bar";')}
      </Code>
    </pre>
  ))
  .add("Highlighted", () => {
    return boolean("lightMode", false) ? (
      <MDXProvider components={{ code: Code.Block.LightMode }}>
        <MdxMockJsCode />
      </MDXProvider>
    ) : (
      <MDXProvider components={{ code: Code.Block }}>
        <MdxMockJsCode />
      </MDXProvider>
    );
  })
  .add("Inline", () => {
    const code = text("text", 'const foo = "bar";', "Code");

    return (
      <Surface
        backgroundColor={select(
          "backgroundColor",
          Surface.backgroundColors,
          "white",
          "Surface",
        )}
      >
        <Code>{code}</Code>
      </Surface>
    );
  });
