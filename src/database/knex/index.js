const config = require("../../../knexfile")
const knex = require("knex")
//crio conexão
const connection = knex(config.development)

module.exports = connection