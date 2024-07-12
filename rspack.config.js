/** @type {import('@rspack/cli').Configuration} */
const cfg = {
	output: {
		path: "./dist"
	},
	entry: {
		index: "./src/index.tsx"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "builtin:swc-loader"
			}
		]
	},
	optimization: {
		splitChunks: false,
		minimize: false
	}
};

module.exports = cfg;
