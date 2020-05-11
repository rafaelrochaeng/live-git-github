const express = require('express')

const app = express()

app.get('/teste', (resquest, response) =>{
    return response.json({ Hello : 'world'})
})

app.listen(3333)