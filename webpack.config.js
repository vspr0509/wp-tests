const path = require("path");
const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin");
const { WebpackPluginServe } = require("webpack-plugin-serve");

module.exports = (env, argv) => {
  const isServe = argv.serve === true;

  return {
    mode:  "production",

    entry: "./src/index.js",

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/", // REQUIRED for serve
    },
    plugins: [
      new MiniHtmlWebpackPlugin({ context: { title: "WP Demo" } }),
      new WebpackPluginServe({
        port: parseInt(process.env.PORT, 10) || 8080,
        static: "./dist",
        liveReload: true,
        waitForBuild: true,
      }),
    ],
  };
};
