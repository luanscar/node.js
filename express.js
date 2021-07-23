const express = require('express')

const app = express()

app.get('/', (require, response)=>{
    response.send("Ok")
})

app.listen(8081, ()=>{
    console.log('Server Started')
})