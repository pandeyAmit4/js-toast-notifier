import { renameSync, rmSync, existsSync } from "fs"
import { join } from "path"

const distPath = join(process.cwd(), "dist")
const srcPath = join(process.cwd(), "srcm")

try {
	if (existsSync(distPath)) {
		// Remove `src` if it already exists
		if (existsSync(srcPath)) {
			console.log("Removing existing src folder...")
			rmSync(srcPath, { recursive: true, force: true })
		}

		console.log("Renaming dist to src...")
		renameSync(distPath, srcPath)
		console.log("Renamed dist to src successfully.")
	} else {
		console.error("dist folder not found.")
	}
} catch (err) {
	console.error("Error during rename operation:", err)
}
