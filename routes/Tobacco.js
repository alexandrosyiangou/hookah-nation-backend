const TobaccoRouter = require('express').Router()
const {getAllTobaccos} = require('../controllers/Tobacco')

TobaccoRouter.get('/all', async (req, res) => {
  res.json(await getAllTobaccos())
})

module.exports = TobaccoRouter
