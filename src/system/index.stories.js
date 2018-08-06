import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as Icons from "react-feather";

import { Heading } from "../components/Markdown";
import Logotype from "../components/Logotype";
import Space from "../components/Space";
import Surface from "../components/Surface";

import colors, { colorKeys, colorTokens, defaultColors } from "./color";
import typography from "./typography";

storiesOf("System", module).add("Introduction", () => (
  <Surface padding="1em">
    <Space size="s">
      <Logotype height="3em" color="mnspcd-color-blue-9" />
    </Space>
    <Heading size="xxl">Design System</Heading>
  </Surface>
));

const swatch = colorKey => {
  const backgroundColor = colors[colorKey];
  const colorRampIndex = parseInt(
    colorKeys.find(colorKey => colors[colorKey] === backgroundColor).slice(-1),
  );
  const colorRampLength = 9;
  const color =
    colorRampIndex > Math.ceil(colorRampLength / 2) || colorKey === "black"
      ? colors.white
      : colorTokens["text-color"];
  const swatch = (
    <div
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

  if (colorRampIndex === colorRampLength) {
    return <Space key={colorKey}>{swatch}</Space>;
  }

  return swatch;
};

storiesOf("System/Color", module)
  .add("Colors", () => (
    <div style={{ fontFamily: typography["font-monospaced"] }}>
      {Object.keys(defaultColors).map(colorKey => (
        <Space key={colorKey}>{swatch(colorKey)}</Space>
      ))}
      {colorKeys
        .slice(2) // remove black & white
        .map(colorKey => swatch(colorKey))}
    </div>
  ))
  .add("Tokens", () => (
    <div style={{ fontFamily: typography["font-monospaced"] }}>
      {Object.keys(colorTokens).map(colorKey => (
        <Space key={colorKey}>{swatch(colorKey)}</Space>
      ))}
    </div>
  ));

const iconKeys = Object.keys(Icons).sort();

storiesOf("System/Iconography", module)
  .add("Component", () => {
    const Icon = Icons[select("Icon", iconKeys, "Activity")];

    return (
      <Icon
        color={colors[select("color", [""].concat(colorKeys))] || undefined}
        size={select("size", ["20", "24", "100%"], "24") || undefined}
      />
    );
  })
  .add("Library", () => {
    return (
      <div>
        {iconKeys.map(icon => {
          const Icon = Icons[icon];
          return (
            <div
              key={icon}
              style={{
                float: "left",
                padding: "1.5em 0",
                textAlign: "center",
                width: "8em",
              }}
            >
              <div>
                <Icon />
              </div>
              <small style={{ fontFamily: typography["font-monospaced"] }}>
                {Icon.name}
              </small>
            </div>
          );
        })}
      </div>
    );
  });

const getFontSize = scale => `${typography[`type-scale-${scale}`]}em`;

const getLineHeight = scale =>
  typography[`leading-scale-${scale === "s" || scale === "l" ? "m" : scale}`] /
  typography[`type-scale-${scale}`];

const waterfall = (font, fontStyle, fontWeight) => {
  return ["s", "m", "l", "xl", "xxl", "xxxl"]
    .map(scale => {
      const fontFamily = typography[font];
      const fontSize = getFontSize(scale);
      const lineHeight = getLineHeight(scale);
      const textTransform = font === "font-small-caps" && "lowercase";

      return (
        <div
          key={scale}
          style={{
            fontFamily,
            fontSize,
            fontStyle,
            fontWeight,
            lineHeight,
            textTransform,
          }}
        >
          {text("text", "Hamburgefonstiv")}
        </div>
      );
    })
    .reverse();
};

storiesOf("System/Typography", module)
  .add("Tryout", () => {
    const font = select(
      "font",
      Object.keys(typography)
        .filter(item => item.includes("font-"))
        .sort(),
      "font-body-text",
    );
    const fontFamily = typography[font];
    const scale = select("scale", ["s", "m", "l", "xl", "xxl", "xxxl"], "m");
    const fontSize = getFontSize(scale);
    const fontStyle = select("style", ["italic", "normal"], "normal");
    const fontWeight = select("weight", ["300", "400"], "400");
    const lineHeight = getLineHeight(scale);
    const maxWidth = boolean("measure", true) && typography.measure;
    const textTransform = font === "font-small-caps" && "lowercase";

    return (
      <div
        style={{
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
      >
        {text(
          "text",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        )}
      </div>
    );
  })
  .add("Waterfalls", () => {
    return (
      <div>
        {waterfall("font-small-caps", "normal", "400")}
        {waterfall("font-body-text", "normal", "400")}
        {waterfall("font-monospaced", "normal", "400")}
        {waterfall("font-monospaced", "italic", "300")}
        {waterfall("font-monospaced", "normal", "300")}
        {waterfall("font-functional", "normal", "400")}
        {waterfall("font-display", "normal", "400")}
        {waterfall("font-body-text", "italic", "400")}
      </div>
    );
  });
