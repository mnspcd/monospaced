require("@babel/register");

const emoji = require("remark-emoji");
const path = require("path");

module.exports = async ({ config }) => {
  const cssRule = config.module.rules.find(
    r => r.test.toString() === /\.css$/.toString(),
  );
  const postCssUse = cssRule.use.find(
    u => u.loader && u.loader.indexOf("postcss-loader") > -1,
  );

  delete postCssUse.options;

  const mdxRule = config.module.rules.find(
    r => r.test.toString() === /\.mdx$/.toString(),
  );

  const mdxJsUse = mdxRule.use.find(
    u => u.loader && u.loader.indexOf("@mdx-js/loader") > -1,
  );

  mdxJsUse.options = { remarkPlugins: [emoji] };

  return config;
};
