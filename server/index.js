require('dotenv').config()
const express = require('express')
const connectToMongo = require('./db')
const authRoute = require('./routes/auth')

/* config */
const app = express()
const port = process.env.PORT
app.use(express.json())

/* connect with db */
connectToMongo()

/* Routes */
app.use("/api/auth", authRoute)


/* start server */
app.listen(port, ()=>console.log(`server started at http://localhost:${port}`))
