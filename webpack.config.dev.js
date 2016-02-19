var path = require('path');
var webpack = require('webpack');
var app_config = require('./appconfig.js');

var devServer = app_config.getDevServer();
var entries = ['webpack-dev-server/client?http://' + devServer.ip + ':' + devServer.port,
  'webpack/hot/only-dev-server'
];

for (var en in app_config.entry) {
  if (app_config.entry.hasOwnProperty(en)) {
    console.error('Pushing entry: ' + app_config.entry[en]);
    entries.push(app_config.entry[en]);
  }
}

module.exports = {
  devtool: 'eval',
  entry: entries,
  output: {
    path: path.join(__dirname, 'app/js'),
    filename: 'bundle.js',
    publicPath: '/debug/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.jsx$|\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  },
  resolve: {
    root: path.resolve(__dirname, 'src'),
    extensions: ['', '.jsx', '.js', '.css'],
    alias: app_config.alias
  }
};
