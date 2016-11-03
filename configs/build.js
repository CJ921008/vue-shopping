var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');
var path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../src/main.js"),
    depn: [
      "vue",
      "vue-router",
      "vuex"
    ]
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: 'app.[name].js',
    publicPath: 'dist/'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  resolve: {
    root: path.resolve(__dirname,'../src'),
    alias: {
      vue: 'vue/dist/vue.min.js',
      src: path.resolve(__dirname, '../src'),
      compon: path.resolve(__dirname, '../src/components'),
      project: path.resolve(__dirname, '../src/project'),
      style: path.resolve(__dirname, '../src/style')
    },
    extensions: ['', '.js', '.vue'],
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
    }],
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: 'url?limit=10000&name=images/[name].[ext]',
    }, {
      test: /\.(woff|svg|ttf|eot)$/,
      loader: 'url?limit=10000',
    }, {
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.html$/,
      loader: 'html-loader',
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader',
      }),
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'sass-loader',
      }),
    }, ],
  },
  vue: {
    loaders: {
      scss: 'style!css!sass',
      js: 'babel'
    },
  },
  babel: {
    "presets": [
      ["latest", {
        "es2015": {
          "normal": true
        },
      }],
      "stage-2",
    ],
    "plugins": ["transform-runtime"],
    "comments": false,
  },
  // 可以在这里配置对应的输出CDN路径如 http://localhost:8080/
};

if (process.env.NODE_ENV === 'prod') {
  module.exports.devtool = false;
  module.exports.plugins = [
    // new ExtractTextPlugin({
    //   filename: "../app.[contenthash].css",
    //   allChunks: true
    // }),
    // 抽离公共js
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: 'js/vendor_vue.js',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // 自动注入 html
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: path.resolve(__dirname, '../dist/index.html'),
    }),
    // Gzip if support can open
    // Added as the last plugin
    // Not sure if it's worth gzipping index.html - no harm no foul
    // new CompressionWebpackPlugin({
    //     asset: "[path].gz[query]",
    //     algorithm: "gzip",
    //     test: /\.js$|\.css$|\.html$/,
    //     threshold: 10240,
    //     minRatio: 0.8
    // })
  ];
}
