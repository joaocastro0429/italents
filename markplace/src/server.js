import express from 'express'

const server= express()


server.get("/",(req,res)=>{
    res.send("Bem vindo ao nosso marketplace")
})

server.listen(3333)