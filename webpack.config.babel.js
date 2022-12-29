// import CopyWebpackPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import path from "path";
import reactRouterToArray from "react-router-to-array";
import emoji from "remark-emoji";
import StaticSiteGeneratorPlugin from "static-site-generator-webpack-plugin";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";

module.exports = () => {
  // Prevent webpack from trying to process files before loaders are configured
  require.extensions[".css"] = () => {};
  require.extensions[".mdx"] = () => {};

  // Workaround for legacy SSL removal in Node 17+
  const crypto = require("crypto");
  const cryptoOrigCreateHash = crypto.createHash;
  crypto.createHash = algorithm =>
    cryptoOrigCreateHash(algorithm === "md4" ? "sha256" : algorithm);

  const routes = reactRouterToArray(require("./src/routes").default);

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
          include: [path.resolve(__dirname, "src/assets")],
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
              options: { remarkPlugins: [emoji] },
            },
          ],
        },
        {
          test: /\.png$/,
          include: [
            path.resolve(__dirname, "src/@monospaced/modern/assets/images"),
          ],
          loader: "file-loader",
          options: { name: "assets/[name].[ext]" },
        },
      ],
    },
    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin(),
        new UglifyJsPlugin({ cache: true, parallel: true }),
      ],
    },
    output: {
      filename: "bundle.js",
      globalObject: "this",
      libraryTarget: "umd",
      path: `${__dirname}/build`,
      publicPath: "/",
    },
    plugins: [
      // new CopyWebpackPlugin([{ context: "src/legacy", from: "**/*" }]),
      new MiniCssExtractPlugin({ filename: "styles.css" }),
      new StaticSiteGeneratorPlugin("bundle.js", routes),
    ],
    stats: "minimal",
  };

  return config;
};
