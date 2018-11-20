import DocumentMeta from "react-document-meta";
import React from "react";

import Grid from "../../components/Grid";
import Group from "../../components/Group";
import { Heading, Paragraph } from "../../components/Markdown";
import Logotype from "../../components/Logotype";
import Masthead from "../../components/Masthead";
import Tile from "../../components/Tile";
import Poster from "../../components/Poster";
import Space from "../../components/Space";

const clientIcons = require("../../assets/clients");

const Home = ({ content: { clients, description, mastheadLinks, title } }) => {
  return (
    <React.Fragment>
      <DocumentMeta description={description} title={title} />
      <Space>
        <Poster padding="0 0 3em">
          <Space>
            <Masthead
              headingLevel="1"
              links={mastheadLinks}
              logo={<Logotype height="1.5em" />}
            />
          </Space>
          <Grid>
            <Grid.Item colSpan="5">
              <Heading size="xxxl">{description}</Heading>
            </Grid.Item>
          </Grid>
        </Poster>
      </Space>
      <Space size="l">
        <Grid>
          <Grid.Item colSpan="2">
            <Heading color="brand-primary-dark-color" level="2" size="xl">
              Our services
            </Heading>
          </Grid.Item>
          <Grid.Item colSpan="4" colStart="3">
            <Space>
              <Heading level="3" size="xl">
                Design systems engineering
              </Heading>
            </Space>
            <Space>
              <Heading level="3" size="xl">
                Front-end development
              </Heading>
            </Space>
            <Space>
              <Heading level="3" size="xl">
                Legacy code rescue
              </Heading>
            </Space>
            <Space>
              <Heading level="3" size="xl">
                Prototyping, concepts & MVPs
              </Heading>
            </Space>
            <Space>
              <Heading level="3" size="xl">
                Web applications
              </Heading>
            </Space>
          </Grid.Item>
        </Grid>
      </Space>
      <Space size="l">
        <Grid>
          <Grid.Item colSpan="2">
            <Heading color="brand-primary-dark-color" level="2" size="xl">
              Selected clients
            </Heading>
          </Grid.Item>
          <Grid.Item colSpan="4" colStart="3">
            <Group tessellate>
              {clients.map(client => {
                const { href, icon } = client;
                const Icon = clientIcons[icon];

                return (
                  <Group.Item key={icon}>
                    {Icon && (
                      <Tile href={href}>
                        <Icon width="100%" />
                      </Tile>
                    )}
                  </Group.Item>
                );
              })}
            </Group>
          </Grid.Item>
        </Grid>
      </Space>
    </React.Fragment>
  );
};

export default Home;
