const Tobacco = require('../models/Tobacco')
const knex = require('../knex')

const tobaccoTable = knex.knex('tobaccos')

/** 
 * @returns {Tobacco[]} List of all [Tobacco] objects
 */
async function getAllTobaccos() {
  return await tobaccoTable.select()
}

async function getTobaccosByBrand(brand) {
  return await tobaccoTable.select().where('brand', brand)
}

async function getTobaccosByCategory(category) {
  return await tobaccoTable.select().where('category', category)
}

async function getTobaccosBySubCategory(subCategory) {
  return await tobaccoTable.select().where('sub_category', subCategory)
}

async function getTobaccosByTaste(taste) {
  return await tobaccoTable.select().where('taste', taste)
}

exports.getAllTobaccos = getAllTobaccos
exports.getTobaccosByBrand = getTobaccosByBrand
exports.getTobaccosByCategory = getTobaccosByCategory
exports.getTobaccosBySubCategory = getTobaccosBySubCategory
exports.getTobaccosByTaste = getTobaccosByTaste
