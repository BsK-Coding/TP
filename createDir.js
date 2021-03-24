/*## COMMANDE: Create Directory ##*/

// Import de la fonction mkdir du module fs
const { mkdirSync } = require('fs')
// Import du module nécessaire à l'interaction du user
const readlineSync = require('readline-sync')

const createDir = (mkdir, dossier) => {
  mkdirSync(`./${dossier}`)
}


/* Check argument 3 et 4 */
if (process.argv.length === 3 && process.argv[2] !== 'mkdir') {
  console.log("cet argument d'inversement de pyramid est incorrecte")
  process.exit(1)
}

let mkdir = (process.argv[2])
let dossier = readlineSync.question('Veuillez entrer le nom du dossier à créer: ')

createDir(mkdir, dossier)