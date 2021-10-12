/** @type {import('next').NextConfig} */

const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  webpack(config) {
    config.plugins.push(
      new ESLintPlugin({
        // Plugin options
        extensions: ["js", "jsx", "ts", "tsx"],
        eslintPath: require.resolve("eslint"),
      })
    );

    return config;
  },
};
