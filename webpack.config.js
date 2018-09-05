const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "public", "dist"),
		filename: "bundle.js"
	},
	mode: "none",
	module: {
		rules: [
			{
				loader: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	},
	devtool: "inline-cheap-module-source-map",
	devServer: {
		contentBase: path.join(__dirname, "public"),
		watchContentBase: true,
		publicPath: "/dist/"
	}
};
