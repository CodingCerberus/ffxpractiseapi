const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const enemies  = {
    'anacondaur':{
        'name':'Anacondaur',
        'hp':5800,
        'mp':70,
        'location': ['Calm Lands'] ,
        'zanmatoLevel': 1
    },
    'behemoth':{
        'name':'Behemoth',
        'hp':23000,
        'mp':480,
        'location': ['Mt. Gagazet', 'Zanarkand Ruins'],
        'zanmatoLevel': 2
    },
    'cactuar':{
        'name':'Cactuar',
        'hp':800,
        'mp':1,
        'location': ['Cactuar Nation'],
        'zanmatoLevel': 2
    },
    'chimera brain':{
        'name':'Chimera Brain',
        'hp':9800,
        'mp':250,
        'location': ['Calm Lands'],
        'zanmatoLevel': 1
    },
    'dark ixion':{
        'name':'Dark Ixion',
        'hp':1200000,
        'mp':999,
        'location': ['Thunder Plains'],
        'zanmatoLevel': 6
    }
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/js/main.js', (req, res)=>{
    res.sendFile(__dirname + '/js/main.js')
})

app.get('/api/:enemies', (req, res)=>{
    const enemyName = req.params.enemies.toLowerCase()
    if(enemies[enemyName]){
        res.json(enemies[enemyName])
    }else{
        res.json(enemies['cactuar'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}`)
})