import DocumentMeta from "react-document-meta";
import React from "react";

import Grid from "../../components/Grid";
import { Heading, Paragraph, Rule } from "../../components/Markdown";
import Logotype from "../../components/Logotype";
import Masthead from "../../components/Masthead";
import Space from "../../components/Space";
import Surface from "../../components/Surface";

const Legal = ({ content: { description, mastheadLinks, title } }) => {
  return (
    <React.Fragment>
      <DocumentMeta
        description={description}
        title={`Page not found | ${title}`}
      />
      <Space size="l">
        <Space>
          <Masthead links={mastheadLinks} logo={<Logotype height="1.5em" />} />
          <Surface backgroundColor="blue-light">
            <Rule />
          </Surface>
        </Space>
        <Grid>
          <Grid.Item colSpan="6">
            <Space size="s">
              <Heading size="xxxl">
                <span className="u-monospaced">404</span>
              </Heading>
              <Heading level="1" size="xl">
                Page not found
              </Heading>
            </Space>
            <Paragraph>
              <small>The requested URL was not found on this server</small>
            </Paragraph>
          </Grid.Item>
        </Grid>
      </Space>
    </React.Fragment>
  );
};

export default Legal;
