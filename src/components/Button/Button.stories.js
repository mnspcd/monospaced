import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as Icons from "react-feather";

import Grid from "../Grid";
import Group from "../Group";
import Space from "../Space";
import Surface from "../Surface";

import Button from "./Button";

storiesOf("Components/Button", module)
  .add("Component", () => {
    const buttonText = text("text", "Make it rain", "Button") || null;
    const Icon =
      Icons[
        select(
          "icon",
          [""].concat(Object.keys(Icons).sort()),
          "CloudRain",
          "Button",
        )
      ];
    const colorVariant =
      select("colorVariant", [""].concat(Button.colorVariants), "", "Button") ||
      null;
    const styleVariant =
      select("styleVariant", [""].concat(Button.styleVariants), "", "Button") ||
      null;
    const minWidth = text("minWidth", "", "Button") || null;
    const disabled = boolean("disabled", false, "Button");

    return (
      <Surface
        backgroundColor={select(
          "backgroundColor",
          Surface.backgroundColors,
          "white",
          "Surface",
        )}
      >
        <Button
          colorVariant={colorVariant}
          styleVariant={styleVariant}
          minWidth={minWidth}
          disabled={disabled}
          icon={Icon && <Icon size="100%" />}
        >
          {buttonText}
        </Button>
      </Surface>
    );
  })
  .add("Variants", () => {
    const buttonText = text("text", "Make it rain", "Button") || null;
    const Icon =
      Icons[
        select(
          "icon",
          [""].concat(Object.keys(Icons).sort()),
          "CloudRain",
          "Button",
        )
      ];

    return (
      <Surface
        backgroundColor={select(
          "backgroundColor",
          Surface.backgroundColors,
          "white",
          "Surface",
        )}
      >
        <Grid>
          <Grid.Item colSpan="12">
            <Space />
            {buttonText && Icon && (
              <Space>
                <Space>
                  <Group>
                    <Group.Item>
                      <Button icon={Icon && <Icon size="100%" />}>
                        {buttonText}
                      </Button>
                    </Group.Item>
                    <Group.Item>
                      <Button
                        icon={Icon && <Icon size="100%" />}
                        styleVariant="outlined"
                      >
                        {buttonText}
                      </Button>
                    </Group.Item>
                    <Group.Item>
                      <Button
                        icon={Icon && <Icon size="100%" />}
                        styleVariant="flat"
                      >
                        {buttonText}
                      </Button>
                    </Group.Item>
                  </Group>
                </Space>
                <Space>
                  <Group>
                    <Group.Item>
                      <Button
                        colorVariant="danger"
                        icon={Icon && <Icon size="100%" />}
                      >
                        {buttonText}
                      </Button>
                    </Group.Item>
                    <Group.Item>
                      <Button
                        colorVariant="danger"
                        icon={Icon && <Icon size="100%" />}
                        styleVariant="outlined"
                      >
                        {buttonText}
                      </Button>
                    </Group.Item>
                    <Group.Item>
                      <Button
                        colorVariant="danger"
                        icon={Icon && <Icon size="100%" />}
                        styleVariant="flat"
                      >
                        {buttonText}
                      </Button>
                    </Group.Item>
                  </Group>
                </Space>
                <Group>
                  <Group.Item>
                    <Button icon={Icon && <Icon size="100%" />} disabled>
                      {buttonText}
                    </Button>
                  </Group.Item>
                  <Group.Item>
                    <Button
                      icon={Icon && <Icon size="100%" />}
                      styleVariant="outlined"
                      disabled
                    >
                      {buttonText}
                    </Button>
                  </Group.Item>
                  <Group.Item>
                    <Button
                      icon={Icon && <Icon size="100%" />}
                      styleVariant="flat"
                      disabled
                    >
                      {buttonText}
                    </Button>
                  </Group.Item>
                </Group>
              </Space>
            )}
            {buttonText && (
              <Space>
                <Space>
                  <Group>
                    <Group.Item>
                      <Button>{buttonText}</Button>
                    </Group.Item>
                    <Group.Item>
                      <Button styleVariant="outlined">{buttonText}</Button>
                    </Group.Item>
                    <Group.Item>
                      <Button styleVariant="flat">{buttonText}</Button>
                    </Group.Item>
                  </Group>
                </Space>
                <Space>
                  <Group>
                    <Group.Item>
                      <Button colorVariant="danger">{buttonText}</Button>
                    </Group.Item>
                    <Group.Item>
                      <Button colorVariant="danger" styleVariant="outlined">
                        {buttonText}
                      </Button>
                    </Group.Item>
                    <Group.Item>
                      <Button colorVariant="danger" styleVariant="flat">
                        {buttonText}
                      </Button>
                    </Group.Item>
                  </Group>
                </Space>
                <Group>
                  <Group.Item>
                    <Button disabled>{buttonText}</Button>
                  </Group.Item>
                  <Group.Item>
                    <Button styleVariant="outlined" disabled>
                      {buttonText}
                    </Button>
                  </Group.Item>
                  <Group.Item>
                    <Button styleVariant="flat" disabled>
                      {buttonText}
                    </Button>
                  </Group.Item>
                </Group>
              </Space>
            )}
            {Icon && (
              <Space>
                <Space>
                  <Group>
                    <Group.Item>
                      <Button icon={<Icon size="100%" />} />
                    </Group.Item>
                    <Group.Item>
                      <Button
                        icon={<Icon size="100%" />}
                        styleVariant="outlined"
                      />
                    </Group.Item>
                    <Group.Item>
                      <Button icon={<Icon size="100%" />} styleVariant="flat" />
                    </Group.Item>
                  </Group>
                </Space>
                <Space>
                  <Group>
                    <Group.Item>
                      <Button
                        colorVariant="danger"
                        icon={<Icon size="100%" />}
                      />
                    </Group.Item>
                    <Group.Item>
                      <Button
                        colorVariant="danger"
                        icon={<Icon size="100%" />}
                        styleVariant="outlined"
                      />
                    </Group.Item>
                    <Group.Item>
                      <Button
                        colorVariant="danger"
                        icon={<Icon size="100%" />}
                        styleVariant="flat"
                      />
                    </Group.Item>
                  </Group>
                </Space>
                <Group>
                  <Group.Item>
                    <Button icon={<Icon size="100%" />} disabled />
                  </Group.Item>
                  <Group.Item>
                    <Button
                      icon={<Icon size="100%" />}
                      styleVariant="outlined"
                      disabled
                    />
                  </Group.Item>
                  <Group.Item>
                    <Button
                      icon={<Icon size="100%" />}
                      styleVariant="flat"
                      disabled
                    />
                  </Group.Item>
                </Group>
              </Space>
            )}
          </Grid.Item>
        </Grid>
      </Surface>
    );
  });
