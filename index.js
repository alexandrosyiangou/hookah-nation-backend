const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const BrandRoutes = require('./routes/Brand')
const TobaccoRoutes = require('./routes/Tobacco')

const app = express()

const port = process.env.PORT || 3000
process.env.NODE_ENV = process.env.NODE_ENV == undefined ? 'development' : process.env.NODE_ENV 

process.on('uncaughtException', (e) => console.error('Process Unhandled Error', e))
process.on('unhandledRejection', (e) => console.error('Process Unhandled Rejection', e))

app.use(morgan('common'))

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/brands', BrandRoutes)

app.use('/tobaccos', TobaccoRoutes)

app.listen(port, () => {
  console.log(`Running server in ${process.env.NODE_ENV} mode`)
  console.log(`Server listening on 127.0.0.1:${port}`)
})

