import CopyWebpackPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import ReactRouterToArray from "react-router-to-array";
import StaticSiteGeneratorPlugin from "static-site-generator-webpack-plugin";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import emoji from "remark-emoji";
import highlight from "remark-highlight.js";
import path from "path";
import webpack from "webpack";

module.exports = env => {
  // Prevent webpack from trying to process files before loaders are configured
  require.extensions[".css"] = () => {};
  require.extensions[".mdx"] = () => {};

  const routes = ReactRouterToArray(require("./src/routes"));

  const config = {
    devServer: { inline: false, stats: "minimal" },
    entry: "./src/index.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: "css-loader", options: { importLoaders: 1 } },
            "postcss-loader",
          ],
        },
        {
          test: /\.htaccess$/,
          loader: "file-loader",
          options: { name: "[name]" },
        },
        {
          test: /\.(ico|png|svg|webmanifest|xml)$/,
          exclude: [path.resolve(__dirname, "src/assets/clients")],
          loader: "file-loader",
          options: { name: "[name].[ext]" },
        },
        {
          test: /\.(jpg|woff|woff2)$/,
          loader: "file-loader",
          options: { name: "assets/[name].[ext]" },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /.mdx?$/,
          use: [
            "babel-loader",
            {
              loader: "@mdx-js/loader",
              options: { mdPlugins: [emoji, highlight] },
            },
          ],
        },
      ],
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({ cache: true, parallel: true }),
        new OptimizeCSSAssetsPlugin(),
      ],
    },
    output: {
      filename: "bundle.js",
      globalObject: "this",
      libraryTarget: "umd",
      path: __dirname + "/build",
      publicPath: "/",
    },
    plugins: [
      new CopyWebpackPlugin([{ context: "src/legacy", from: "**/*" }]),
      new MiniCssExtractPlugin({ filename: "styles.css" }),
      new StaticSiteGeneratorPlugin("bundle.js", routes),
    ],
    stats: "minimal",
  };

  return config;
};
