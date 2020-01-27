const BrandRouter = require('express').Router()
const {getAllBrands} = require('../controllers/Brand')

BrandRouter.get('/all', async (req, res) => {
  res.json(await getAllBrands())
})

module.exports = BrandRouter
