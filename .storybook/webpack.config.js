require("babel-register");

const emoji = require("remark-emoji");
const highlight = require("remark-highlight.js");
const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.entry.styles = path.resolve(
    __dirname,
    "../src/components/Root/Root.css",
  );

  const cssRule = defaultConfig.module.rules.find(
    r => r.test.toString() === /\.css$/.toString(),
  );
  const postCssUse = cssRule.use.find(
    u => u.loader && u.loader.indexOf("postcss-loader") > -1,
  );

  delete postCssUse.options;

  defaultConfig.module.rules.push({
    test: /.mdx?$/,
    use: [
      "babel-loader",
      {
        loader: "@mdx-js/loader",
        options: { mdPlugins: [emoji, highlight] },
      },
    ],
  });

  return defaultConfig;
};
