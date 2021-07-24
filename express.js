const { Console } = require('console')
const express = require('express')

const app = express()

app.get('/', (require, response)=>{
    response.sendFile(__dirname + '/src/index.html')
    
})
app.get('/sobre', (require, response)=>{
    response.sendFile(__dirname + '/src/sobre.html')
    
})
app.get('/contato', (require, response)=>{
    response.sendFile(__dirname + '/src/contato.html')
    
})

app.listen(3000, ()=>{
    console.log('Server Started')
})