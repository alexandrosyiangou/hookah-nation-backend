const Tobacco = require('../models/Tobacco')
const knex = require('../knex')

/** 
 * @returns {Tobacco[]} List of all [Tobacco] objects
 */
async function getAllTobaccos() {
  return await knex.knex('tobaccos').select()
}

exports.getAllTobaccos = getAllTobaccos
