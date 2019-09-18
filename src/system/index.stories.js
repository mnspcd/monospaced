import React from "react";
// import { boolean, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as Icons from "react-feather";

import Grid from "../components/Grid";
import { Heading, Paragraph } from "../components/Markdown";
import Space from "../components/Space";

import colors, { colorKeys, colorTokens, defaultColors } from "./color";
import typography from "./typography";

storiesOf("System", module).add("Introduction", () => (
  <Grid>
    <Grid.Item colSpan="6">
      <Space />
      <Heading size="xxxl">
        Monospaced <br />
        Design <br />
        System
      </Heading>
    </Grid.Item>
  </Grid>
));

storiesOf("System", module).add("Color", () => {
  const getSwatch = colorKey => {
    const backgroundColor = colors[colorKey];
    const colorRampIndex = parseInt(
      colorKeys.find(key => colors[key] === backgroundColor).slice(-1),
    );
    const colorRampLength = 9;
    const color =
      colorRampIndex > Math.ceil(colorRampLength / 2)
        ? colors["mnspcd-color-white"]
        : colorTokens["mnspcd-color-grey-9"];
    const swatch = (
      <div
        className="u-monospaced"
        key={colorKey}
        style={{ backgroundColor, color, padding: "0.5em 1em" }}
      >
        <div>
          {colorKey
            .replace(/-/g, " ")
            .replace("color", "")
            .replace("mnspcd ", "")}
        </div>
        <small>{backgroundColor}</small>
      </div>
    );

    return swatch;
  };

  return (
    <>
      <Space />
      <Grid>
        <Grid.Item colSpan="6">
          <Heading size="xxxl">Color</Heading>
          <Space size="s" />
        </Grid.Item>
        {Object.keys(defaultColors).map(colorKey => (
          <Grid.Item colSpan="2" key={colorKey}>
            {getSwatch(colorKey)}
          </Grid.Item>
        ))}
      </Grid>
      <Space size="l" />
      <Grid>
        <Grid.Item colSpan="6">
          <Heading size="xxl">Grey</Heading>
          <Space size="s" />
        </Grid.Item>
        {colorKeys.slice(2, 11).map(colorKey => (
          <Grid.Item colSpan="2" key={colorKey}>
            {getSwatch(colorKey)}
          </Grid.Item>
        ))}
      </Grid>
      <Space size="l" />
      <Grid>
        <Grid.Item colSpan="6">
          <Heading size="xxl">Red</Heading>
        </Grid.Item>
        {colorKeys.slice(11, 20).map(colorKey => (
          <Grid.Item colSpan="2" key={colorKey}>
            {getSwatch(colorKey)}
          </Grid.Item>
        ))}
      </Grid>
      <Space size="l" />
      <Grid>
        <Grid.Item colSpan="6">
          <Heading size="xxl">Pink</Heading>
        </Grid.Item>
        {colorKeys.slice(20, 29).map(colorKey => (
          <Grid.Item colSpan="2" key={colorKey}>
            {getSwatch(colorKey)}
          </Grid.Item>
        ))}
      </Grid>
      <Space size="l" />
      <Grid>
        <Grid.Item colSpan="6">
          <Heading size="xxl">Blue</Heading>
        </Grid.Item>
        {colorKeys.slice(29, 38).map(colorKey => (
          <Grid.Item colSpan="2" key={colorKey}>
            {getSwatch(colorKey)}
          </Grid.Item>
        ))}
      </Grid>
      <Space size="l" />
      <Grid>
        <Grid.Item colSpan="6">
          <Heading size="xxl">Azure</Heading>
        </Grid.Item>
        {colorKeys.slice(38, 47).map(colorKey => (
          <Grid.Item colSpan="2" key={colorKey}>
            {getSwatch(colorKey)}
          </Grid.Item>
        ))}
      </Grid>
      <Space size="l" />
      <Grid>
        <Grid.Item colSpan="6">
          <Heading size="xxl">Cyan</Heading>
        </Grid.Item>
        {colorKeys.slice(47, 56).map(colorKey => (
          <Grid.Item colSpan="2" key={colorKey}>
            {getSwatch(colorKey)}
          </Grid.Item>
        ))}
      </Grid>
      <Space size="l" />
      <Grid>
        <Grid.Item colSpan="6">
          <Heading size="xxl">Green</Heading>
        </Grid.Item>
        {colorKeys.slice(56, 65).map(colorKey => (
          <Grid.Item colSpan="2" key={colorKey}>
            {getSwatch(colorKey)}
          </Grid.Item>
        ))}
      </Grid>
      <Space size="l" />
      <Grid>
        <Grid.Item colSpan="6">
          <Heading size="xxl">Yellow</Heading>
        </Grid.Item>
        {colorKeys.slice(65, 74).map(colorKey => (
          <Grid.Item colSpan="2" key={colorKey}>
            {getSwatch(colorKey)}
          </Grid.Item>
        ))}
      </Grid>
      <Space size="l" />
      <Grid>
        <Grid.Item colSpan="6">
          <Heading size="xxl">Orange</Heading>
        </Grid.Item>
        {colorKeys.slice(74, 83).map(colorKey => (
          <Grid.Item colSpan="2" key={colorKey}>
            {getSwatch(colorKey)}
          </Grid.Item>
        ))}
      </Grid>
      <Space size="l" />
      <Grid>
        <Grid.Item colSpan="6">
          <Heading size="xxxl">Tokens</Heading>
          <Space size="s" />
        </Grid.Item>
        {Object.keys(colorTokens)
          .slice(0, 3)
          .map(colorKey => (
            <Grid.Item colSpan="2" key={colorKey}>
              {getSwatch(colorKey)}
            </Grid.Item>
          ))}
        {Object.keys(colorTokens)
          .slice(3)
          .map(colorKey => (
            <Grid.Item colSpan="3" key={colorKey}>
              {getSwatch(colorKey)}
            </Grid.Item>
          ))}
      </Grid>
      <Space />
    </>
  );
});

storiesOf("System", module).add("Iconography", () => {
  const iconKeys = Object.keys(Icons).sort();

  return (
    <Grid>
      <Grid.Item colSpan="6">
        <Space />
        <Heading size="xxxl">Iconography</Heading>
        <Space />
        {iconKeys.map(icon => {
          const Icon = Icons[icon];
          return (
            <div
              key={icon}
              style={{ float: "left", padding: "0.75em 0 1.5em", width: "9em" }}
            >
              <div>
                <Icon />
              </div>
              <small className="u-monospaced">{Icon.name}</small>
            </div>
          );
        })}
      </Grid.Item>
    </Grid>
  );
});

storiesOf("System", module).add("Typography", () => {
  /* const font = select(
    "font",
    Object.keys(typography)
      .filter(item => item.includes("font-"))
      .sort(),
    "font-body-text",
  );
  const getFontSize = scale => `${typography[`type-scale-${scale}`]}em`;
  const getLineHeight = scale =>
    typography[
      `leading-scale-${scale === "s" || scale === "l" ? "m" : scale}`
    ] / typography[`type-scale-${scale}`];
  const fontFamily = typography[font];
  const scale = select("scale", ["s", "m", "l", "xl", "xxl", "xxxl"], "xl");
  const fontSize = getFontSize(scale);
  const fontStyle = select("style", ["italic", "normal"], "normal");
  const fontWeight = select("weight", ["300", "400"], "400");
  const lineHeight = getLineHeight(scale);
  const maxWidth = boolean("measure", true) && typography.measure;
  const textTransform = font === "font-small-caps" && "lowercase";

  window.setTimeout(() => {
    document.getElementById("editable").focus();
    document.execCommand("selectAll", false, null);
    document.getSelection().collapseToEnd();
  }); */

  return (
    <>
      <Space />
      <Grid>
        <Grid.Item colSpan="6">
          <Heading size="xxxl">Typography</Heading>
          <Space size="l" />
          {/* <div
            contentEditable
            id="editable"
            style={{
              outline: "none",
              fontFamily,
              fontSize,
              fontStyle,
              fontSynthesis: "none",
              fontVariant:
                (font === "font-display" && "diagonal-fractions lining-nums") ||
                (font === "font-monospaced" && "slashed-zero"),
              fontWeight,
              lineHeight,
              maxWidth,
              textTransform,
            }}
            suppressContentEditableWarning
          >
            Type here…
          </div>
          <Space size="xl" /> */}
          <Heading size="xxxl">Display</Heading>
          <Space />
          <Heading size="xxl">Heading</Heading>
          <Space />
          <Heading size="xl">Heading</Heading>
          <Space />
          <Heading size="l">Heading</Heading>
          <Space />
          <Heading size="m">Heading</Heading>
          <Space />
          <Heading size="s">Heading</Heading>
          <Space />
          <Paragraph>
            Body text, <i>italic</i>,{" "}
            <span className="u-smallCaps">small caps</span>
          </Paragraph>
          <Space />
          <div className="u-monospaced" style={{ fontWeight: "300" }}>
            Code <i>italic</i> <strong>emphasis</strong>
          </div>
          <Space />
          <div style={{ fontFamily: typography["font-functional"] }}>
            Functional
          </div>
        </Grid.Item>
      </Grid>
      <Space />
    </>
  );
});
