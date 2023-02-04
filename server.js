const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const enemies  = {

    '??? (chest Tutorial)':{
        'name':'??? (Chest (Tutorial))',
        'hp':1,
        'mp':1,
        'location':['Moonflow'],
        'zanmatoLevel':1 
    },

    '???(chest)':{
        'name':'??? (Chest)',
        'hp':1,
        'mp':1,
        'location': ['Moonflow', 'Bikanel Desert', 'Omega Ruins'] ,
        'zanmatoLevel':1 
    },

    //A

    'achelous':{
        'name':'Achelous',
        'hp':5100,
        'mp':85,
        'location':['Gagazet Caves'],
        'zanmatoLevel':1
    },

    'adamantoise':{
        'name':'Adamantoise',
        'hp':54400,
        'mp':40,
        'location':['Inside Sin', 'Omega Ruins'],
        'zanmatoLevel':3
    },

    'aerouge':{
        'name':'Aerouge',
        'hp':200,
        'mp':220,
        'location':['Thunder Plains'],
        'zanmatoLevel':1
    },

    'ahriman':{
        'name':'Ahriman',
        'hp':2800,
        'mp':400,
        'location':['Mt. Gagazet', 'Zanarkand', 'Inside Sin'],
        'zanmatoLevel':1
    },

    'alcyone':{
        'name':'Alcyone',
        'hp':430,
        'mp':42,
        'location':['Bikanel'],
        'zanmatoLevel':1
    },

    'anacondaur':{
        'name':'Anacondaur',
        'hp':5800,
        'mp':70,
        'location': ['Calm Lands'] ,
        'zanmatoLevel': 1
    },

    'aqua flan':{
        'name':'Aqua Flan',
        'hp':2025,
        'mp':1,
        'location':['Via Purifico (Land)'],
        'zanmatoLevel':1
    },

    //B

    'bandersnatch':{
        'name':'Bandersnatch',
        'hp':1800,
        'mp':75,
        'location':['Mt. Gagazet'],
        'zanmatoLevel':1
    },

    'barbatos':{
        'name':'Barbatos',
        'hp':95000,
        'mp':480,
        'location':['Inside Sin'],
        'zanmatoLevel':2
    },

    'bashura':{
        'name':'Bashura',
        'hp':17000,
        'mp':5,
        'location':['Mt. Gagazet', 'Zanarkand'],
        'zanmatoLevel':1
    },

    'basilisk':{
        'name':'Basilisk',
        'hp':2025,
        'mp':20,
        'location':['Djose Highroad'],
        'zanmatoLevel':1
    },

    'bat eye':{
        'name':'Bat Eye',
        'hp':380,
        'mp':280,
        'location':['Via Purifico (Land)'],
        'zanmatoLevel':1
    },

    'behemoth':{
        'name':'Behemoth',
        'hp':23000,
        'mp':480,
        'location':['Mt. Gagazet', 'Zanarkand Ruins'],
        'zanmatoLevel':2
    },

    'behemoth king':{
        'name':'Behemoth King',
        'hp':67500,
        'mp':700,
        'location':['Inside Sin'],
        'zanmatoLevel':2
    },

    'bite bug':{
        'name':'Bite Bug',
        'hp':200,
        'mp':10,
        'location':['Djose Highroad', 'Moonflow'],
        'zanmatoLevel':1
    },

    'black element':{
        'name':'Black Element',
        'hp':7600,
        'mp':500,
        'location':['Omega Ruins'],
        'zanmatoLevel':1
    },

    'blue element':{
        'name':'Blue Element',
        'hp':1500,
        'mp':220,
        'location':['Macalania Woods'],
        'zanmatoLevel':1
    },

    'bomb miihen':{
        'name':"Bomb (Mi'ihen Highroad)",
        'hp':850,
        'mp':30,
        'location':["Mi'ihen Highroad","Mushroom Rock Road"],
        'zanmatoLevel':1
    },

    'bomb home':{
        'name':"Bomb (Home)",
        'hp':2200,
        'mp':45,
        'location':['Home', 'Airship'],
        'zanmatoLevel':1
    },

    'buer':{
        'name':'Buer',
        'hp':230,
        'mp':250,
        'location':['Thunder Plains'],
        'zanmatoLevel':1
    },

    'bunyip':{
        'name':'Bunyip',
        'hp':400,
        'mp':15,
        'location':['Djose Highroad', 'Moonflow'],
        'zanmatoLevel':1
    },

    //C

    'cactuar':{
        'name':'Cactuar',
        'hp':800,
        'mp':1,
        'location': ['Cactuar Nation'],
        'zanmatoLevel': 2
    },

    'cave iguion':{
        'name':'Cave Iguion',
        'hp':550,
        'mp':1,
        'location':['Via Purifico - Land'],
        'zanmatoLevel':1
    },

    'chimera macalania woods':{
        'name':'Chimera (Macalania Woods)',
        'hp':5250,
        'mp':130,
        'location':['Macalania Woods'],
        'zanmatoLevel':1
    },

    'chimera home':{
        'name':'Chimera (Home)',
        'hp':9000,
        'mp':200,
        'location':['Home'],
        'zanmatoLevel':1
    },

    'chimera brain':{
        'name':'Chimera Brain',
        'hp':9800,
        'mp':250,
        'location': ['Calm Lands'],
        'zanmatoLevel': 1
    },

    'coeurl':{
        'name':'Coeurl',
        'hp':6000,
        'mp':480,
        'location':['Calm Lands', 'Cavern of the Stolen Fayth'],
        'zanmatoLevel':1
    },

    'condor':{
        'name':'Condor',
        'hp':95,
        'mp':15,
        'location':['Besaid'],
        'zanmatoLevel':1
    },

    //D

    'dark element':{
        'name':'Dark Element',
        'hp':1800,
        'mp':280,
        'location':['Cavern of the Stolen Fayth'],
        'zanmatoLevel':1
    },

    'dark flan':{
        'name':'Dark Flan',
        'hp':12800,
        'mp':250,
        'location':['Mt. Gagazet', 'Zanarkand'],
        'zanmatoLevel':1
    },

    'defender':{
        'name':'Defender',
        'hp':12000,
        'mp':1,
        'location':['Cavern of the Stolen Fayth'],
        'zanmatoLevel':1
    },

    'defender z':{
        'name':'Defender Z',
        'hp':42300,
        'mp':1,
        'location':['Zanarkand Dome', 'Omega Ruins'],
        'zanmatoLevel':1
    },

    'demonolith':{
        'name':'Demonolith',
        'hp':45000,
        'mp':9999,
        'location':['Inside Sin', 'Omega Ruins'],
        'zanmatoLevel':1
    },

    'dingo':{
        'name':'Dingo',
        'hp':125,
        'mp':10,
        'location':['Besaid'],
        'zanmatoLevel':1
    },

    'dinonix':{
        'name':'Dinonix',
        'hp':140,
        'mp':25,
        'location':['Kilika Woods'],
        'zanmatoLevel':1
    },

    'dual horn miihen':{
        'name':"Dual Horn (Mi'ihen Highroad)",
        'hp':1875,
        'mp':18,
        'location':["Mi'ihen Highroad", 'Mushroom Rock Road'],
        'zanmatoLevel':1
    },

    'dual horn home':{
        'name':'Dual Horn (Home)',
        'hp':3795,
        'mp':22,
        'location':['Home', 'Fahrenheit'],
        'zanmatoLevel':1
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