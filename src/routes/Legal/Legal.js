import DocumentMeta from "react-document-meta";
import PropTypes from "prop-types";
import React from "react";

import Grid from "../../components/Grid";
import { Heading, Paragraph } from "../../components/Markdown";
import Logotype from "../../components/Logotype";
import Masthead from "../../components/Masthead";
import Space from "../../components/Space";

const Legal = ({ content: { description, mastheadLinks, title } }) => {
  return (
    <React.Fragment>
      <DocumentMeta description={description} title={`Legal | ${title}`} />
      <Space size="l">
        <Masthead links={mastheadLinks} logo={<Logotype height="1.5em" />} />
      </Space>
      <Space size="xl">
        <Grid>
          <Grid.Item colSpan="5">
            <Heading level="1" size="xxxl">
              Legal matters
            </Heading>
          </Grid.Item>
        </Grid>
      </Space>
      <Space size="l">
        <Grid>
          <Grid.Item colSpan="2">
            <Heading color="brand-primary-dark-color" level="2" size="xl">
              Company details
            </Heading>
          </Grid.Item>
          <Grid.Item colSpan="4" colStart="3">
            <Space size="s">
              <Heading level="3" size="xl">
                Monospaced Ltd
              </Heading>
            </Space>
            <Space size="s">
              <Paragraph>
                38 Ardfillan Road <br />
                London SE6 1SS
              </Paragraph>
            </Space>
            <Paragraph>
              <small>
                Monospaced Ltd is a company registered in England and Wales with
                company number 6151329 and VAT number 899547930.
              </small>
            </Paragraph>
          </Grid.Item>
        </Grid>
      </Space>
      <Space size="xl">
        <Grid>
          <Grid.Item colSpan="2">
            <Heading color="brand-primary-dark-color" level="2" size="xl">
              Privacy policy
            </Heading>
          </Grid.Item>
          <Grid.Item colSpan="4" colStart="3">
            <Space size="s">
              <Heading level="3" size="xl">
                Email
              </Heading>
            </Space>
            <Space>
              <Paragraph>
                If you send an email to Monospaced, we’ll email you back. If we
                end up working together, or think we may do in the future, we’ll
                keep your email in our contacts so we can stay in touch. No
                newsletters and no spam. That’s it!
              </Paragraph>
            </Space>
            <Space size="s">
              <Heading level="3" size="xl">
                Website
              </Heading>
            </Space>
            <Paragraph>
              This website does not store your personal data. At all. We don’t
              have a database to store it in. No cookies and no analytics. For
              compliance with web font licences, we call a third-party hit
              counter on each page load. But that’s all!
            </Paragraph>
          </Grid.Item>
        </Grid>
      </Space>
    </React.Fragment>
  );
};

Legal.propTypes = { content: PropTypes.object };

export default Legal;
