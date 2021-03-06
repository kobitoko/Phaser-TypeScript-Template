const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge( common, {
	devtool: 'source-map',
	devServer: {
		contentBase: ['./static/'],
		hot: true,
		compress: true,
        inline: true
	},
	plugins: [
	new webpack.NamedModulesPlugin(),
	new webpack.HotModuleReplacementPlugin()
	]
});