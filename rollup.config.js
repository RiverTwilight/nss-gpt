import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { babel } from "@rollup/plugin-babel";
import alias from "@rollup/plugin-alias";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const plugins = [
	alias({
		entries: [
			{ find: "react", replacement: "preact/compat" },
			{
				find: "react-dom/test-utils",
				replacement: "preact/test-utils",
			},
			{ find: "react-dom", replacement: "preact/compat" },
			{
				find: "react/jsx-runtime",
				replacement: "preact/jsx-runtime",
			},
		],
	}),
	json(),
	nodeResolve({ extensions }),
	commonjs(),
	babel({
		babelHelpers: "bundled",
		extensions,
		include: ["src/**/*"],
		plugins: [
			[
				"@babel/plugin-transform-react-jsx",
				{
					pragma: "h",
					pragmaFrag: "Fragment",
				},
			],
		],
	}),
];

export default [
	{
		input: "src/pages/index.jsx",
		output: [
			{
				file: "dist/index.bundle.js",
				format: "cjs",
				sourcemap: false,
			},
		],
		preserveSymlinks: true,
		plugins: [...plugins],
	},
];
