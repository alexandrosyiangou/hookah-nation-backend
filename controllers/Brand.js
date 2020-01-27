const Brand = require('../models/Brand')
const knex = require('../knex')

/** 
 * @returns {Brand[]} List of all [Brand] objects
 */
async function getAllBrands() {
  return await knex.knex('brands').select()
}

exports.getAllBrands = getAllBrands
