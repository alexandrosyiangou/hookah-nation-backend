const express = require('express')
const bodyParser = require('body-parser')

const BrandRoutes = require('./routes/Brand')
const TobaccoRoutes = require('./routes/Tobacco')

const app = express()

const port = process.env.PORT || 3000

process.on('uncaughtException', (e) => console.error('Process Unhandled Error', e))
process.on('unhandledRejection', (e) => console.error('Process Unhandled Rejection', e))

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/brands', BrandRoutes)

app.use('/tobaccos', TobaccoRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
