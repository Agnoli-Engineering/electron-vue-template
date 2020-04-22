var path = require("path")

module.exports = {
	mode: "development",

	target: "electron-main",

	entry: "./src/electron/main.js",

	resolve: {
		alias: {
			"~@": path.resolve(__dirname, "src/electron")
		}
	},

	module: {
		rules: [{
			test: /\.m?js$/,
			exclude: /(node_modules)/,
			use: {
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env"]
				}
			}
		}]
	},

	output: {
		path: path.resolve(__dirname, "dist/electron"),
		filename: "index.js"
	}
}
