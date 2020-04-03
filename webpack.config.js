const path = require("path");

module.exports = {
  entry: "./src/index.js",
  target: "node",
  mode: "none",
  resolve: {
    extensions: [".js"],
  },
  externals: {
    "coc.nvim": "commonjs coc.nvim",
  },
  output: {
    path: path.join(__dirname, "lib"),
    filename: "index.js",
    libraryTarget: "commonjs",
  },
  plugins: [],
  node: {
    __dirname: false,
    __filename: false,
  },
};
