'use strict';

const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
require('dotenv').config({ path: '../.env'})

const app = express()

// middlewares

// protect headers
app.use(helmet())
// cors settings
app.use(cors({origin: process.env.ORIGIN}))
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})