var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var app_config = require('./appconfig.js');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

function getAllFiles(root) {
  var res = [],
    files = fs.readdirSync(root);
  files.forEach(function(file) {
    var pathname = root + '/' + file,
      stat = fs.lstatSync(pathname);

    if (!stat.isDirectory()) {
      res.push(file.substr(0, file.length-4));
    } else {
      res = res.concat(getAllFiles(pathname));
    }
  });
  return res;
}
var chunksOfPages = getAllFiles(path.join(__dirname, 'src/pages'));
console.log('Chunks Of Pages:'+chunksOfPages);
module.exports = {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2,
      chunks: chunksOfPages
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // new webpack.optimize.DedupePlugin(),
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
    filename: '[name].js',
    publicPath: './js/'
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
    'amazeui-react': 'AMUIReact',
    'moment': 'moment'
  }
};
