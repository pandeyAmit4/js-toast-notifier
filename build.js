// const esbuild = require("esbuild")
// const postcss = require("postcss")
// const fs = require("fs")
// const path = require("path")

// async function build() {
// 	// Read and process CSS with PostCSS
// 	const cssFilePath = path.resolve(__dirname, "src/styles.css")
// 	const css = fs.readFileSync(cssFilePath, "utf8")

// 	const result = await postcss([require("postcss-import"), require("cssnano")({ preset: "default" })]).process(css, { from: cssFilePath })

// 	// Create a JS file to inject the minified CSS
// 	const cssContent = `
//     const style = document.createElement('style');
//     style.textContent = \`${result.css}\`;
//     document.head.appendChild(style);
//   `
// 	fs.writeFileSync("src/styles.js", cssContent)

// 	// Bundle with esbuild, including minified CSS
// 	esbuild
// 		.build({
// 			entryPoints: ["src/index.js", "src/styles.js"],
// 			bundle: true,
// 			minify: true,
// 			outfile: "dist/index.js",
// 			format: "esm",
// 		})
// 		.catch(() => process.exit(1))
// }

// build()
