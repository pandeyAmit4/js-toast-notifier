import fs from "fs"
import path from "path"

const srcDir = path.resolve("src/styles")
const destDir = path.resolve("dist")

// Ensure destination directory exists
if (!fs.existsSync(destDir)) {
	fs.mkdirSync(destDir, { recursive: true })
}

// Copy each SCSS file
fs.readdirSync(srcDir).forEach((file) => {
	if (file.endsWith(".scss")) {
		fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file))
	}
})
