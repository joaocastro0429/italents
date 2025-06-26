const express = require('express')
const router = require('./routes/routes.js')

const app = express()

app.use(express.json())
app.use(router)


app.use((req, res, next) => {
    return res.status(404).json({
        message: 'NOT FOUND',
})
})


app.listen(3333)

