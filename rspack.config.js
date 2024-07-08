/** @type {import('@rspack/cli').Configuration} */
const serverCfg = {
	target: "node",
	output: {
		path: "./dist"
	},
	entry: {
		index: "./src/index.ts"
	}
};

module.exports = serverCfg;
