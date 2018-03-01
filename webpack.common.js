const path = require('path'),
    // Taken from https://github.com/rroylance/phaser-npm-webpack-typescript-starter-project
    // https://github.com/photonstorm/phaser-ce/#webpack
    rootDir = path.resolve(__dirname),
    phaserModulePath = path.join(rootDir, "node_modules", "phaser-ce", "build", "custom");

module.exports = {
	entry: path.join(__dirname, "src", "main.ts"),
    module: {
		rules: [
			{ 
				test: /\.tsx?$/,
				enforce: 'pre',
				loader: 'tslint-loader' 
			},
			{
				test: /pixi\.js/,
				loader: "expose-loader?PIXI"
			},
			{
				test: /phaser-split\.js/,
				loader: "expose-loader?Phaser"
			},
			{
				test: /p2\.js/,
				loader: "expose-loader?p2"
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: '/node_modules/'
			}
		]
    },
	resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            'pixi': path.join(phaserModulePath, "pixi.js"),
			'phaser-ce': path.join(phaserModulePath, "phaser-split.js"),
            'p2': path.join(phaserModulePath, "p2.js")
        }
	},
	output: {
		filename:'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};