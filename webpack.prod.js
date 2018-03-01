const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWEbpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
	plugins: [
		new CleanWEbpackPlugin(
			[ 'dist/*' ], 
			{ verbose: true }
		),
		new UglifyJsPlugin(),
		new CopyWebpackPlugin([
			{
				from: './static/'
			}
		])
	]
});