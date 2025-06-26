const express = require('express')
const connectDB= require('./database/db.js')
const router = require('./routes/routes.js')

const server= express()

connectDB()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(router)

server.use((req, res, next) => {
  res.json({messge:"NOT FOUND"})
})

server.listen(3333)