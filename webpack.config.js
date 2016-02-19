var path = require('path');
var webpack = require('webpack');
var app_config = require('./appconfig.js');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // keeps hashes consistent between compilations
    new webpack.optimize.OccurenceOrderPlugin(),
    // minifies your code
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  entry: app_config.entry,
  output: {
    path: path.join(__dirname, 'app/js'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.jsx$|\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  },
  resolve: {
    root: path.resolve(__dirname, 'src'),
    extensions: ['', '.jsx', '.js', '.css'],
    alias: app_config.alias
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    'amazeui-react': 'AMUIReact'
  }
};
