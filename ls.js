const fs = require('fs')

/* check */
if (process.argv.length !== 3) {
  console.log(`usage: node ls.js dossier`)
  process.exit(1)
}

/* check if directory exists */
if (!fs.existsSync(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} does not exist`)
  process.exit(1)
}

// S'agti il d'un Directory ?
const stats = fs.statSync(process.argv[2])
if (!stats.isDirectory()) {
  console.log(`Error: ${process.argv[2]} n'est pas un répertoire`)
  process.exit(1)
}

/* command LS */
// fs.readdirSync(path[, options])

let ls = fs.readdirSync(`./${process.argv[2]}`)
console.log(ls)
