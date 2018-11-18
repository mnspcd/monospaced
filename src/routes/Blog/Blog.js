import DocumentMeta from "react-document-meta";
import { Link } from "react-router";
import React from "react";

import Grid from "../../components/Grid";
import { Heading, List, Rule } from "../../components/Markdown";
import Logotype from "../../components/Logotype";
import Masthead from "../../components/Masthead";
import Space from "../../components/Space";
import Toc from "../../components/Toc";

const Blog = ({ content: { blog, description, mastheadLinks, title } }) => {
  return (
    <React.Fragment>
      <DocumentMeta title={`${title} Blog`} description={description} />
      <Space>
        <Masthead
          activePath="/blog/"
          links={mastheadLinks}
          logo={<Logotype height="1.5em" />}
        />
        <Rule />
      </Space>
      <Space size="l">
        <Grid>
          <Grid.Item colSpan="4" colStart="2">
            <Space>
              <Heading level="1" size="xxxl">
                Blog
              </Heading>
            </Space>
            <Space size="s">
              <Rule />
            </Space>
            <Toc>
              {blog.map(post => {
                const {
                  mdx: {
                    meta: { date, title },
                  },
                  slug,
                } = post;

                return (
                  <Toc.Item date={date} key={slug} slug={slug} title={title} />
                );
              })}
            </Toc>
          </Grid.Item>
        </Grid>
      </Space>
    </React.Fragment>
  );
};

export default Blog;
