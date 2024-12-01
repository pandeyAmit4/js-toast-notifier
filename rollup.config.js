import resolve from "@rollup/plugin-node-resolve"
import terser from "@rollup/plugin-terser"
import postcss from "rollup-plugin-postcss"

export default {
	input: "src/index.js",
	output: [
		{
			file: "dist/index.js",
			format: "es",
			exports: "named",
		},
		{
			file: "dist/index.esm.js",
			format: "es",
		},
		{
			file: "dist/index.umd.js",
			format: "umd",
			name: "ToastNotifier",
			exports: "named",
			globals: {},
		},
	],
	plugins: [
		postcss({
			extract: "toast.css",
			modules: false,
			minimize: true,
			inject: {
				insertAt: "top",
			},
		}),
		resolve(),
		terser(),
	],
}
