import DocumentMeta from "react-document-meta";
import { Link } from "react-router";
import React from "react";

import Grid from "../../../components/Grid";
import { Heading, List, Rule } from "../../../components/Markdown";
import Logotype from "../../../components/Logotype";
import Masthead from "../../../components/Masthead";
import Space from "../../../components/Space";

const Post = ({
  content: { blog, description, mastheadLinks, title },
  route: { path },
}) => {
  const post = blog.find(post => post.slug === path);
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

export default Post;