var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');
var app_config = require('./appconfig.js');

var devServer = app_config.getDevServer();

var compiler = webpack(config);
console.log('Starting Webpack Dev Server....');

var proxyCfg = {};
proxyCfg[app_config.defaultDevServer.apiBashPath] = {
  target: app_config.defaultDevServer.apiAddress,
  secure: false,
  rewrite: function(req, proxyOptions){
    proxyOptions.host=app_config.defaultDevServer.apiHost;
  }
};

var devServerInstance = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: true,
  colors: true,
  historyApiFallback: true,
  proxy: proxyCfg
});
devServerInstance.listen(devServer.port, '0.0.0.0', function(err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at ' + devServer.hostname + ':' + devServer.port);
  console.log('Access address: http://' + devServer.ip + ':' + devServer.port);
});
