const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

const postcssPlugins = [require("postcss-preset-env")()];
if (!devMode) {
  postcssPlugins.push(require("css-mqpacker")({ sort: true }));
  postcssPlugins.push(require("pixrem")());
  postcssPlugins.push(require("cssnano")());
}

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname + "/dist")
  },
  stats: { children: false },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => postcssPlugins
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new MiniCssExtractPlugin({ filename: "style.css" })
  ]
};
