const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
const enemies = require('./monster')

// console.log(enemies['zu'])

// const tidus = {
//     'name':'tidus'
// }

app.use(cors())


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/js/main.js', (req, res)=>{
    res.sendFile(__dirname + '/js/main.js')
})

app.get('/api/:enemies', (req, res)=>{
    const enemyName = String(req.params.enemies.toLowerCase())
    if(enemies[enemyName]){
        console.log(enemies[enemyName])
        res.json(enemies[enemyName])
    }else if(enemyName == 'all'){
        res.json(enemies)
    }else{
        res.json(enemies['cactuar'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}`)
})