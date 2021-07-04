const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    compress: true,
    port: 3001,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  output: {
    publicPath: `/`,
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
