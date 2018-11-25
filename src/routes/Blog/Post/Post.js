import DocumentMeta from "react-document-meta";
import PropTypes from "prop-types";
import React from "react";

import Grid from "../../../components/Grid";
import { Rule } from "../../../components/Markdown";
import Logotype from "../../../components/Logotype";
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
      meta: { layout: Layout, title: postTitle },
    },
  } = post;

  return (
    <React.Fragment>
      <DocumentMeta
        title={`${postTitle} | ${title} Blog`}
        description={description}
      />
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
            <Layout>
              <Mdx />
            </Layout>
          </Grid.Item>
        </Grid>
      </Space>
    </React.Fragment>
  );
};

Post.propTypes = { content: PropTypes.object, route: PropTypes.object };

export default Post;
