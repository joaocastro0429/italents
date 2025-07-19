import express from 'express'
import connectionDb from './database/db.js'
import 'dotenv/config.js'

const server= express()

connectionDb()


server.get("/",(req,res)=>{
    res.send("Bem vindo ao nosso marketplace")
})

server.listen(3333)