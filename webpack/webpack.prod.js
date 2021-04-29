const webpack = require('webpack')
const bundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('shahmir811'),
    }),
    new bundleAnalyzerPlugin(),
  ],
}
