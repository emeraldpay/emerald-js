const path = require("path");
const include = path.resolve(__dirname, '../');

module.exports = {
  // Add '.ts' and '.tsx' as resolvable extensions.
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
      rules: [
          {
            test: /\.tsx/,
            loader: 'awesome-typescript-loader',
            exclude: /node_modules/,
            include
          }
      ]
  }
};