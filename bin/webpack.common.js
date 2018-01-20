const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const rootPath = path.resolve(__dirname, '../');

module.exports = {
	entry: {
		index: path.resolve(rootPath, 'src/js/index.js'),
	},
	output: {
		filename: '[name].js',
		path: path.resolve(rootPath, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.json$/,
				loader: 'json-loader',
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
				options: {
					configFile: 'bin/.eslintrc',
				},
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', {
								targets: {
									browsers: ['last 2 versions', 'ie >= 10'],
								},
							}],
						],
					},
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(['dist'], {
			root: rootPath,
			verbose: false,
		}),
	],
};
