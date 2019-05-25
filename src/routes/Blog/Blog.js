import DocumentMeta from "react-document-meta";
import PropTypes from "prop-types";
import React from "react";

import Grid from "../../components/Grid";
import { Heading, Rule } from "../../components/Markdown";
import Logotype from "../../components/Logotype";
import Masthead from "../../components/Masthead";
import Space from "../../components/Space";
import Toc from "../../components/Toc";

const Blog = ({ content: { blog, description, mastheadLinks, title } }) => {
  return (
    <>
      <DocumentMeta title={`${title} Blog`} description={description} />
      <Space size="l">
        <Masthead
          activePath="/blog/"
          links={mastheadLinks}
          logo={<Logotype height="1.5em" />}
        />
      </Space>
      <Space size="xl">
        <Grid>
          <Grid.Item colSpan="4" colStart="2">
            <Space size="s">
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
                    meta: { date, title: postTitle },
                  },
                  slug,
                } = post;

                return (
                  <Toc.Item
                    date={date}
                    key={slug}
                    slug={slug}
                    title={postTitle}
                  />
                );
              })}
            </Toc>
          </Grid.Item>
        </Grid>
      </Space>
    </>
  );
};

Blog.propTypes = { content: PropTypes.object };

export default Blog;
