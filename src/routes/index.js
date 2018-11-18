import { IndexRoute, Route } from "react-router";
import { MDXProvider } from "@mdx-js/tag";
import React from "react";

import Footer from "../components/Footer";
import { components, Rule } from "../components/Markdown";
import content from "./content";

import Blog, { Post } from "./Blog";
import Home from "./Home";
import Legal from "./Legal";
import NotFound from "./NotFound";

const App = ({
  children,
  route: {
    content: { title, footerLinks },
  },
  routes,
}) => {
  return (
    <MDXProvider components={components}>
      <React.Fragment>
        {React.cloneElement(children, { content }, routes)}
        <Rule />
        <Footer copyright={title} links={footerLinks} routes={routes} />
      </React.Fragment>
    </MDXProvider>
  );
};

const Routes = (
  <Route onChange={forceTrailingSlashOnChange} onEnter={forceTrailingSlash}>
    <Route component={App} content={content} path="/">
      <IndexRoute component={Home} />
      {content.blog.length && <Route component={Blog} path="blog" />}
      {content.blog.map(post => {
        const { slug } = post;
        return <Route component={Post} key={slug} path={slug} />;
      })}
      }<Route component={Legal} path="legal" />
      <Route component={NotFound} path="404" />
      <Route component={NotFound} path="*" />
    </Route>
  </Route>
);

function forceTrailingSlash(nextState, replace) {
  const path = nextState.location.pathname;

  if (path.slice(-1) !== "/") {
    replace({ ...nextState.location, pathname: path + "/" });
  }
}

function forceTrailingSlashOnChange(prevState, nextState, replace) {
  forceTrailingSlash(nextState, replace);
}

module.exports = Routes;