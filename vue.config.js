var path = require("path")
var webpack = require("webpack")

module.exports = {
	publicPath: "",
	outputDir: "./dist/web/",

	chainWebpack: config => {
		config.plugin("html").tap(args => {
			args[0].template = "src/web/public/index.html"

			return args
		})
	},

	configureWebpack: {
		target: "electron-renderer",

		resolve: {
			alias: {
				"~@": path.resolve(__dirname, "src/web")
			}
		},

		module: {
			rules: [{
				test: /\.glob$/,
				use: "glob-loader"
			}]
		}
	},

	css: {
		loaderOptions: {
			stylus: {
				//import: path.resolve(__dirname, "src", "assets", "core.styl")
			}
		}
	}
}
