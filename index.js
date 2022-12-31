const dotenv = require('dotenv')
dotenv.config({ path: '.env' })
const express = require('express')
const { dbConnection } = require('./config/database')
const app = express()

// Connect to database
dbConnection()


const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
    console.log('app listen on port: ', PORT)
})
