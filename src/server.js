const express = require('express')
const initDB = require('./config/db')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

const PORT = 5000
const URI_BASE = '/api/'

initDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const userRouter = require('./app/routes/user')
const uploaderRouter = require('./app/routes/upload')
const productRouter = require('./app/routes/product')

app.use(`${URI_BASE}`, userRouter)
app.use(`${URI_BASE}`, uploaderRouter)
app.use(`${URI_BASE}`, productRouter)

app.listen(PORT, () => {
	console.log('La app is online.')
})
