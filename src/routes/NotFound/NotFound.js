import DocumentMeta from "react-document-meta";
import PropTypes from "prop-types";
import React from "react";

import Grid from "../../components/Grid";
import { Heading, Paragraph } from "../../components/Markdown";
import Logotype from "../../components/Logotype";
import Masthead from "../../components/Masthead";
import Space from "../../components/Space";

const NotFound = ({ content: { description, mastheadLinks, title } }) => {
  return (
    <React.Fragment>
      <DocumentMeta
        description={description}
        title={`Page not found | ${title}`}
      />
      <Space size="l">
        <Masthead links={mastheadLinks} logo={<Logotype height="1.5em" />} />
      </Space>
      <Space size="xl">
        <Grid>
          <Grid.Item colSpan="4" colStart="2">
            <Space size="s">
              <Heading size="xxxl">
                <span className="u-monospaced">404</span>
              </Heading>
              <Heading level="1" size="xl">
                Page not found
              </Heading>
            </Space>
            <Paragraph>
              <small>The requested URL was not found on this server.</small>
            </Paragraph>
          </Grid.Item>
        </Grid>
      </Space>
    </React.Fragment>
  );
};

NotFound.propTypes = { content: PropTypes.object };

export default NotFound;
