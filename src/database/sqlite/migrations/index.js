//importar a conexão
const sqliteConnection = require('../../sqlite/index.js');
const createUsers = require('./createUsers')

async function migrationsRun(){
  const schemas = [
    createUsers
  ].join(',')

  sqliteConnection()
    .then(db => db.exec(schemas))
    .catch(error => console.error(error))
}

module.exports = migrationsRun