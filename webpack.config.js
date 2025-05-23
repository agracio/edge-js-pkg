//const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  //   optimization: {
  //     minimize: false,
  //     minimizer: [
  //       new TerserPlugin({
  //         terserOptions: {
  //           format: {
  //             comments: /^!/i,
  //           },
  //         },
  //     }),
  //     ],
  // },
  entry: './index-webpack.js',
  target: 'node',
  externals: {
      'edge-cs': 'commonjs2 edge-cs',
      'edge-js': 'commonjs2 edge-js',
  },
  node: {
      __dirname: true,
      __filename: true,
  },
}

