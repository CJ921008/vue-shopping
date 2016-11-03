var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

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
		publicPath: ''
	},
	resolveLoader: {
		root: path.join(__dirname, 'node_modules'),
	},
	resolve: {
		root: path.resolve('src'),
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
	postcss: [
		autoprefixer({
			browsers: ['last 3 versions'],
		})
	],
	eslint: {
		configFile: '.eslintrc',
	}
}

if (process.env.NODE_ENV === 'dev') {
	// 配置开发服务器
	module.exports.devServer = {
		historyApiFallback: true,
		hot: true,
		progress: false,
		colors: true,
		proxy: {},
	};
	module.exports.devtool = '#cheap-module-eval-source-map';

	module.exports.plugins = [
		// 抽离公共js
		new webpack.optimize.CommonsChunkPlugin({
			name: "depn",
			filename: 'depn_vue.js',
		}),
		// new ExtractTextPlugin({
		// 	filename: "app.css",
		// 	allChunks: true
		// }),
		// 自动注入 html
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, '../src/index.html'),
		}),
	];
}