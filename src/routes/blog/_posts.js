import fm from "front-matter"
const fs = require("fs")
const path = require("path")

const POSTS_DIR = `${process.cwd()}/src/routes/blog`

const posts = JSON.stringify(svexTree(POSTS_DIR))

/**
 * Get a tree with all the folders and svex file filtered by date
 *
 * @param {*} dir
 * @param {*} [files={}]
 */
function svexTree(dir, files = []) {
  // Read the given directory
  fs.readdirSync(dir).forEach((fileName) => {
    // If it's a directory iterate again
    if (fs.statSync(path.join(dir, fileName)).isDirectory()) {
      files[fileName] = svexTree(path.join(dir, fileName))
      // Update the free
    } else {
      // Only add svex files
      if (/\.svx$/.test(fileName)) {
        // Get content
        const content = fs.readFileSync(path.join(dir, fileName), "utf8")
        // Get attributes
        const { attributes, body } = fm(content)

        attributes.html = body
        attributes.slug = fileName.replace(".svx", "")

        // Set the tree
        files.push(attributes)
      }
    }
  })

  return files
}

export default posts
