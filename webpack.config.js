var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

/*
 * Default webpack configuration for development
 */
var config = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/_15thnight/static/js/app/App.js",
  output: {
    path: __dirname + "/_15thnight/static/js",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0', 'react']
      }
    },
    {
      test: /\.scss$/, // preprocesses sass code into css
      loader: ExtractTextPlugin.extract(
        
        "css!sass")
    }]
  },
  plugins: [
    new ExtractTextPlugin("../css/bundle.css")
  ],
  devServer: {
    contentBase: "./templates",
    colors: true,
    historyApiFallback: true,
    inline: true
  },
}

/*
 * If bundling for production, optimize output
 */
if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({comments: false}),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    })
  ];
};

module.exports = config;
