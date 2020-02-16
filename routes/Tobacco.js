const TobaccoRouter = require('express').Router()
const TobaccoController = require('../controllers/Tobacco')

TobaccoRouter.get('/all', async (req, res) => {
  res.json(await TobaccoController.getAllTobaccos())
})

TobaccoRouter.get('/filter', async (req, res) => {
  const {query} = req
  let filterResults
  if (req.url.includes('brand')) {
    filterResults = await TobaccoController.getTobaccosByBrand(query.brand)
    console.log(`[TobaccoRouter] ${query.brand} filter results`)
  } else if (req.url.includes('category')) {
    filterResults = await TobaccoController.getTobaccosByCategory(query.category)
    console.log(`[TobaccoRouter] ${query.category} filter results`)
  } else if (req.url.includes('sub_category')) {
    filterResults = await TobaccoController.getTobaccosBySubCategory(query.sub_category)
    console.log(`[TobaccoRouter] ${query.sub_category} filter results`)
  } else if (req.url.includes('taste')) {
    filterResults = await TobaccoController.getTobaccosByTaste(query.taste)
    console.log(`[TobaccoRouter] ${query.taste} filter results`)
  } else {
    filterResults = ''
    console.log('[TobaccoRouter] Unknown Query Provided')
  } 

  res.json(filterResults)
})

module.exports = TobaccoRouter
