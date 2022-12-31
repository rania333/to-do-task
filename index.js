const dotenv = require('dotenv')
dotenv.config({ path: '.env' })
const express = require('express')
const { dbConnection } = require('./config/database')
const app = express()

// Connect to database
dbConnection()

// Global middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// get routes 
const taskRoutes = require('./routes/task.route')
app.use('/task', taskRoutes)

// Error handler middleware
app.use((err, req, res, next) => {
    console.log("error >> ", err)
    if (!err.statusCode) {
        return res.status(500).send({ message: "Something went wrong" })
    } else {
        return res.status(err.statusCode).send({ message: err.message })
    }
})

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => {
    console.log('app listen on port: ', PORT)
})

// To handle any error outside express
process.on('unhandledRejection', (err) => {
    console.error('unhandledRejection error', err.name, ' | ', err.message)
    server.close(() => {
        process.exit(1)
    })
})