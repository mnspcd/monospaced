require("@babel/register");

const emoji = require("remark-emoji");
const path = require("path");

module.exports = async ({ config }) => {
  config.entry.push(path.resolve(__dirname, "../src/components/Root/Root.css"));

  const cssRule = config.module.rules.find(
    r => r.test.toString() === /\.css$/.toString(),
  );
  const postCssUse = cssRule.use.find(
    u => u.loader && u.loader.indexOf("postcss-loader") > -1,
  );

  delete postCssUse.options;

  config.module.rules.push({
    include: path.resolve(__dirname, "../"),
    test: /.mdx?$/,
    use: [
      "babel-loader",
      {
        loader: "@mdx-js/loader",
        options: { remarkPlugins: [emoji] },
      },
    ],
  });

  return config;
};
