import DocumentMeta from "react-document-meta";
import PropTypes from "prop-types";
import React from "react";

import Grid from "../../../components/Grid";
import Logotype from "../../../components/Logotype";
import Markdown, { Heading } from "../../../components/Markdown";
import Masthead from "../../../components/Masthead";
import Space from "../../../components/Space";

const Post = ({
  content: { blog, description, mastheadLinks, title },
  route: { path },
}) => {
  const post = blog.find(blogPost => blogPost.slug === path);
  const {
    mdx: {
      default: Mdx,
      meta: { date: postDate, title: postTitle },
    },
  } = post;

  return (
    <React.Fragment>
      <DocumentMeta
        title={`${postTitle} | ${title} Blog`}
        description={description}
      />
      <Space size="l">
        <Masthead
          activePath="/blog/"
          links={mastheadLinks}
          logo={<Logotype height="1.5em" />}
        />
      </Space>
      <Space>
        <Grid>
          <Grid.Item align="center" colSpan="1">
            <Heading size="m">{postDate}</Heading>
          </Grid.Item>
          <Grid.Item colSpan="4">
            <Heading level="1" size="xxxl">
              {postTitle}
            </Heading>
          </Grid.Item>
        </Grid>
      </Space>
      <Space size="xl">
        <Grid>
          <Grid.Item colSpan="4" colStart="2">
            <Markdown>
              <Mdx />
            </Markdown>
          </Grid.Item>
        </Grid>
      </Space>
    </React.Fragment>
  );
};

Post.propTypes = { content: PropTypes.object, route: PropTypes.object };

export default Post;
