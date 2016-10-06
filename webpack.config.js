const path = require('path');

module.exports = {

  // set the context (optional)
  context: path.join(__dirname, '/src'),
  entry: 'index.js',

  // enable loading modules relatively (without the ../../ prefix)
  resolve: {
    root: path.join(__dirname, '/src'),
  },

  module: {
    loaders: [

      // load and compile javascript
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },

      // load css and process less
      { test: /\.css$/, loader: 'style!css' },

      // load JSON files and HTML
      { test: /\.json$/, loader: 'json' },
      { test: /\.html$/, exclude: /node_modules/, loader: 'html' },

      // load fonts(inline base64 URLs for <=8k)
      { test: /\.(ttf|eot|svg|otf)$/, loader: 'file' },
      { test: /\.woff(2)?$/, loader: 'url?limit=8192&minetype=application/font-woff' },

      // load images (inline base64 URLs for <=8k images)
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
    ],
  },

  // webpack dev server configuration
  devServer: {
    contentBase: './src',
    noInfo: false,
    hot: true,
    port: 3000,
  },

  // support source maps
  devtool: '#inline-source-map',
};
