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
    },

    //E

    'epaaj':{
        'name':'Epaaj',
        'hp':8700,
        'mp':25,
        'location':['Cavern of the Stolen Fayth'],
        'zanmatoLevel':1
    },

    'evil eye lake macalania':{
        'name':'Evil Eye (Lake Macalania)',
        'hp':310,
        'mp':300,
        'location':['Lake Macalania'],
        'zanmatoLevel':1
    },

    
    'evil eye home':{
        'name':'Evil Eye (Home)',
        'hp':430,
        'mp':310,
        'location':['Home', 'Fahrenheit'],
        'zanmatoLevel':1
    },

    'exoray':{
        'name':'Exoray',
        'hp':7400,
        'mp':300,
        'location':['Inside Sin'],
        'zanmatoLevel':1
    },

    //F

    'fallen monk (flame thrower)':{
        'name':'Fallen Monk (Flame Thrower)',
        'hp':3300,
        'mp':1,
        'location':['Zanarkand Ruins'],
        'zanmatoLevel':1
    },

    'fallen monk (rifle)':{
        'name':'Fallen Monk (Rifle)',
        'hp':3300,
        'mp':1,
        'location':['Zanarkand Dome'],
        'zanmatoLevel':1
    },

    'flame flan':{
        'name':'Flame Flan',
        'hp':1500,
        'mp':200,
        'location':['Calm Lands'],
        'zanmatoLevel':1
    },

    'floating death':{
        'name':'Floating Death',
        'hp':6700,
        'mp':520,
        'location':['Omega Ruins'],
        'zanmatoLevel':1
    },

    'floating eye':{
        'name':'Floating Eye',
        'hp':140,
        'mp':200,
        'location':["Mi'ihen Highroad", 'Mushroom Rock Road'],
        'zanmatoLevel':1
    },

    'funguar':{
        'name':'Funguar',
        'hp':540,
        'mp':60,
        'location':['Mushroom Rock Road', 'Djose Highroad'],
        'zanmatoLevel':1
    },

    //G

    'gandarewa':{
        'name':'Gandarewa',
        'hp':148,
        'mp':160,
        'location':['Mushroom Rock Road', 'Djose Highroad', 'Moonflow'],
        'zanmatoLevel':1
    },

    'garm':{
        'name':'Garm',
        'hp':240,
        'mp':35,
        'location':['Djose Highroad', 'Moonflow'],
        'zanmatoLevel':1
    },

    'garuda besaid':{
        'name':'Garuda (Besaid)',
        'hp':1400,
        'mp':50,
        'location':['Besaid (Waterfall Way)'],
        'zanmatoLevel':1
    },

    'garuda luca':{
        'name':'Garuda (Luca)',
        'hp':1800,
        'mp':10,
        'location':['Luca (Stands)'],
        'zanmatoLevel':1
    },

    'garuda mushroom rock road':{
        'name':'Garuda (Mushroom Rock Road)',
        'hp':4000,
        'mp':50,
        'location':['Mushroom Rock Road'],
        'zanmatoLevel':1
    },

    'gemini (club)':{
        'name':'Gemini (Club)',
        'hp':36000,
        'mp':1,
        'location':['Inside Sin', 'Omega Ruins'],
        'zanmatoLevel':1
    },

    'gemini (sword)':{
        'name':'Gemini (Sword)',
        'hp':36000,
        'mp':1,
        'location':['Inside Sin', 'Omega Ruins'],
        'zanmatoLevel':1
    },

    'ghost':{
        'name':'Ghost',
        'hp':9999,
        'mp':350,
        'location':['Cavern of the Stolen Fayth'],
        'zanmatoLevel':1
    },

    'gold element':{
        'name':'Gold Element',
        'hp':1200,
        'mp':180,
        'location':['Thunder Plains'],
        'zanmatoLevel':1
    },

    'grat':{
        'name':'Grat',
        'hp':4000,
        'mp':25,
        'location':['Mt. Gagazet'],
        'zanmatoLevel':1
    },

    'great malboro':{
        'name':'Great Malboro',
        'hp':64000,
        'mp':1,
        'location':['Omega Ruins', 'Inside Sin'],
        'zanmatoLevel':2
    },

    'grenade':{
        'name':'Grenade',
        'hp':7500,
        'mp':63,
        'location':['Mt. Gagazet'],
        'zanmatoLevel':1
    },

    'grendel':{
        'name':'Grendel',
        'hp':9500,
        'mp':62,
        'location':['Mt. Gagazet', 'Zanarkand Ruins'],
        'zanmatoLevel':1
    },

    'guado guardian seymour':{
        'name':'Guado Guardian (Seymour battle)',
        'hp':2000,
        'mp':10,
        'location':['Macalania Temple (Seymour battle)'],
        'zanmatoLevel':4
    },

    'guado guardian macalania temple':{
        'name':'Guado Guardian (Macalania Temple)',
        'hp':1200,
        'mp':300,
        'location':['Macalania Temple', 'Lake Macalania (Wendigo battle)'],
        'zanmatoLevel':4
    },

    'guado guardian home':{
        'name':'Guado Guardian (Home)',
        'hp':2600,
        'mp':600,
        'location':['Home'],
        'zanmatoLevel':1
    },

    //H

    'halma':{
        'name':'Halma',
        'hp':13000,
        'mp':1,
        'location':['Omega Ruins'],
        'zanmatoLevel':1
    },

    //I

    'ice flan':{
        'name':'Ice Flan',
        'hp':1350,
        'mp':160,
        'location':['Lake Macalania'],
        'zanmatoLevel':1
    },

    'iguion':{
        'name':'Iguion',
        'hp':370,
        'mp':70,
        'location':['Macalania Woods'],
        'zanmatoLevel':1
    },

    'imp':{
        'name':'Imp',
        'hp':880,
        'mp':300,
        'location':['Cavern of the Stolen Fayth', 'Mt. Gagazet'],
        'zanmatoLevel':1
    },

    'ipiria':{
        'name':'Ipiria',
        'hp':180,
        'mp':35,
        'location':["Mi'ihen Highroad (Oldroad)", 'Mushroom Rock Road'],
        'zanmatoLevel':1
    },

    'iron giant':{
        'name':'Iron Giant',
        'hp':3600,
        'mp':1,
        'location':['Thunder Plains'],
        'zanmatoLevel':1
    },

    //K

    'killer bee':{
        'name':'Killer Bee',
        'hp':110,
        'mp':5,
        'location':['Kilika Woods'],
        'zanmatoLevel':1
    },

    'kusariqqu':{
        'name':'Kusariqqu',
        'hp':445,
        'mp':31,
        'location':['Thunder Plains'],
        'zanmatoLevel':1
    },

    //L

    'lamashtu':{
        'name':'Lamashtu',
        'hp':275,
        'mp':21,
        'location':['Djose Highroad', 'Mushroom Rock Road'],
        'zanmatoLevel':1
    },

    'land worm':{
        'name':'Land Worm',
        'hp':80000,
        'mp':160,
        'location':['Inside Sin'],
        'zanmatoLevel':1
    },

    'larva':{
        'name':'Larva',
        'hp':1498,
        'mp':1000,
        'location':['Thunder Plains'],
        'zanmatoLevel':1
    },

    //M

    'machea':{
        'name':'Machea',
        'hp':18000,
        'mp':59,
        'location':['Omega Ruins'],
        'zanmatoLevel':1
    },

    'maelspike':{
        'name':'Maelspike',
        'hp':10000,
        'mp':35,
        'location':['Mt. Gagazet'],
        'zanmatoLevel':1
    },

    'MONSTER':{
        'name':'',
        'hp':,
        'mp':,
        'location':[''],
        'zanmatoLevel':
    },

    'mafdet':{
        'name':'Mafdet',
        'hp':710,
        'mp':25,
        'location':['Lake Macalania'],
        'zanmatoLevel':1
    },

    'magic urn':{
        'name':'Magic Urn',
        'hp':999999,
        'mp':9999,
        'location':['Cavern of the Stolen Fayth'],
        'zanmatoLevel':1
    },

    'malboro':{
        'name':'Malboro',
        'hp':27000,
        'mp':1,
        'location':['Calm Lands', 'Cavern of the Stolen Fayth'],
        'zanmatoLevel':2
    },

    'mandragora':{
        'name':'Mandragora',
        'hp':31000,
        'mp':120,
        'location':['Mt. Gagazet Cavern', 'Zanarkand Ruins'],
        'zanmatoLevel':1
    },

    'master coeurl':{
        'name':'Master Coeurl',
        'hp':13000,
        'mp':540,
        'location':['Omega Ruins'],
        'zanmatoLevel':1
    },

    'master tonberry':{
        'name':'Master Tonberry',
        'hp':48000,
        'mp':1,
        'location':['Omega Ruins'],
        'zanmatoLevel':1
    },

    'maze larva':{
        'name':'Maze Larva',
        'hp':2222,
        'mp':1111,
        'location':['Via Purifico (Land)'],
        'zanmatoLevel':1
    },

    'mech defender':{
        'name':'Mech Defender',
        'hp':8700,
        'mp':1,
        'location':['Mt. Gagazet'],
        'zanmatoLevel':1
    },

    'mech guard':{
        'name':'Mech Guard',
        'hp':1280,
        'mp':1,
        'location':['Bikanel'],
        'zanmatoLevel':1
    },

    'mech gunner':{
        'name':'Mech Gunner',
        'hp':2800,
        'mp':1,
        'location':['Bikanel'],
        'zanmatoLevel':1
    },

    'mech hunter':{
        'name':'Mech Hunter',
        'hp':5500,
        'mp':1,
        'location':['Cavern of the Stolen Fayth'],
        'zanmatoLevel':1
    },

    'mech leader':{
        'name':'Mech Leader',
        'hp':3700,
        'mp':1,
        'location':['Mt. Gagazet'],
        'zanmatoLevel':1
    },

    'mech scouter normal':{
        'name':'Mech Scouter (Normal)',
        'hp':2750,
        'mp':1,
        'location':['Calm Lands'],
        'zanmatoLevel':1
    },

    'mech scouter flaming':{
        'name':'Mech Scouter (Flaming)',
        'hp':2750,
        'mp':1,
        'location':['Calm Lands'],
        'zanmatoLevel':1
    },

    'melusine':{
        'name':'Melusine',
        'hp':265,
        'mp':65,
        'location':['Thunder Plains'],
        'zanmatoLevel':1
    },

    "miihen fang":{
        'name':"Mi'ihen fang",
        'hp':160,
        'mp':20,
        'location':["Mi'ihen Highroad"],
        'zanmatoLevel':1
    },

    'mimic ruminant (red life core)':{
        'name':'Mimic (Ruminant (red life core))',
        'hp':60000,
        'mp':10,
        'location':['Omega Ruins'],
        'zanmatoLevel':1
    },

    'mimic machina (blue life core)':{
        'name':'Mimic (Machina (blue life core))',
        'hp':40000,
        'mp':10,
        'location':['Omega Ruins'],
        'zanmatoLevel':1
    },

    'mimic roc (yellow life core & flying)':{
        'name':'Mimic (Roc (yellow life core & flying))',
        'hp':40000,
        'mp':10,
        'location':['Omega Ruins'],
        'zanmatoLevel':1
    },

    'mimic basilisk (bluish green life core)':{
        'name':'Mimic (Basilisk (bluish green life core))',
        'hp':40000,
        'mp':10,
        'location':['Omega Ruins'],
        'zanmatoLevel':1
    },

    'murussu':{
        'name':'Murussu',
        'hp':580,
        'mp':20,
        'location':['Macalania Woods'],
        'zanmatoLevel':1
    },

    'mushussu':{
        'name':'Mushussu',
        'hp':680,
        'mp':38,
        'location':['Bikanel'],
        'zanmatoLevel':1
    },

    //N

    'nebiros':{
        'name':'Nebiros',
        'hp':700,
        'mp':65,
        'location':['Calm Lands'],
        'zanmatoLevel':1
    },

    'nighogg':{
        'name':'Nighogg',
        'hp':2000,
        'mp':46,
        'location':['Cavern of the Stolen Fayth', 'Mt. Gagazet'],
        'zanmatoLevel':1
    },

    //O

    'ochu':{
        'name':'Ochu',
        'hp':7200,
        'mp':35,
        'location':['Moonflow'],
        'zanmatoLevel':1
    },

    'octopus':{
        'name':'Octopus',
        'hp':4500,
        'mp':1,
        'location':['Via Purifico (Underwater)'],
        'zanmatoLevel':1
    },

    'ogre':{
        'name':'Ogre',
        'hp':9400,
        'mp':3,
        'location':['Calm Lands'],
        'zanmatoLevel':1
    },

    //P

    'phlegyas':{
        'name':'Phlegyas',
        'hp':1680,
        'mp':50,
        'location':['Via Purifico (Underwater)'],
        'zanmatoLevel':1
    },

    'piranha single':{
        'name':'Piranha (Single)',
        'hp':50,
        'mp':1,
        'location':['Salvage Ship (Surface, Underwater)','Besaid (Valley)'],
        'zanmatoLevel':1
    },

    'piranha paired':{
        'name':'Piranha (Paired)',
        'hp':100,
        'mp':2,
        'location':['Salvage Ship (Surface, Underwater)','Besaid (Valley)'],
        'zanmatoLevel':1
    },

    'piranha trio':{
        'name':'Piranha (Trio)',
        'hp':150,
        'mp':3,
        'location':['Salvage Ship (Surface, Underwater)','Underwater Ruins','Besaid (Valley)'],
        'zanmatoLevel':1
    },

    'puroboros':{
        'name':'Puroboros',
        'hp':20000,
        'mp':180,
        'location':['Omega Ruins'],
        'zanmatoLevel':1
    },

    //Q

    'qactuar':{
        'name':'Qactuar',
        'hp':500,
        'mp':1,
        'location':['Thunder Plains'],
        'zanmatoLevel':2
    },

    //R

    'ragora':{
        'name':'Ragora',
        'hp':780,
        'mp':15,
        'location':['Kilika Woods'],
        'zanmatoLevel':1
    },

    'raldo':{
        'name':'Raldo',
        'hp':240,
        'mp':10,
        'location':["Mi'ihen Highroad"],
        'zanmatoLevel':1
    },

    'raptor':{
        'name':'Raptor',
        'hp':200,
        'mp':45,
        'location':['Mushroom Rock Road', 'Djose Highroad'],
        'zanmatoLevel':1
    },

    'red element':{
        'name':'Red Element',
        'hp':450,
        'mp':130,
        'location':['Mushroom Rock Road'],
        'zanmatoLevel':1
    },

    'remora':{
        'name':'Remora',
        'hp':3000,
        'mp':22,
        'location':['Via Purifico (Underwater)'],
        'zanmatoLevel':1
    },

    //S

    'sahagin baaj temple':{
        'name':'Sahagin (Baaj Temple)',
        'hp':100,
        'mp':5,
        'location':['Submerged Ruins (Underwater Hall)'],
        'zanmatoLevel':1
    },

    'sahagin via purifico land':{
        'name':'Sahagin (Via Purifico (Land))',
        'hp':1380,
        'mp':20,
        'location':['Via Purifico (Land)'],
        'zanmatoLevel':1
    },

    'sahagin via purifico underwater':{
        'name':'Sahagin Via Purifico (Underwater)',
        'hp':380,
        'mp':20,
        'location':['Via Purifico (Underwater)'],
        'zanmatoLevel':1
    },

    'sahagin chief':{
        'name':'Sahagin Chief',
        'hp':170,
        'mp':20,
        'location':['Luca (Stadium)'],
        'zanmatoLevel':1
    },

    'sand wolf':{
        'name':'Sand Wolf',
        'hp':450,
        'mp':55,
        'location':['Bikanel'],
        'zanmatoLevel':1
    },

    'sand worm':{
        'name':'Sand Worm',
        'hp':45000,
        'mp':100,
        'location':['Bikanel'],
        'zanmatoLevel':1
    },

    'sandragora':{
        'name':'Sandragora',
        'hp':12750,
        'mp':3,
        'location':['Bikanel'],
        'zanmatoLevel':1
    },

    'shred':{
        'name':'Shred',
        'hp':1950,
        'mp':30,
        'location':['Calm Lands'],
        'zanmatoLevel':1
    },

    'simurgh':{
        'name':'Simurgh',
        'hp':200,
        'mp':27,
        'location':['Djose Highroad'],
        'zanmatoLevel':1
    },

    'sinscale dream zanarkand':{
        'name':'Sinscale (Dream Zanarkand)',
        'hp':100,
        'mp':0,
        'location':['Dream Zanarkand (Overpass)'],
        'zanmatoLevel':4
    },

    'sinscale ss liki deck':{
        'name':'Sinscale (S.S. Liki (Deck))',
        'hp':200,
        'mp':0,
        'location':['S.S. Liki (Deck)'],
        'zanmatoLevel':1
    },

    'sinscale ss liki underwater':{
        'name':'Sinscale (S.S. Liki (Underwater))',
        'hp':100,
        'mp':0,
        'location':['S.S. Liki (Underwater)'],
        'zanmatoLevel':1
    },

    'skoll':{
        'name':'Skoll',
        'hp':1000,
        'mp':60,
        'location':['Calm Lands'],
        'zanmatoLevel':1
    },

    'snow flan':{
        'name':'Snow Flan',
        'hp':600,
        'mp':120,
        'location':['Djose Highroad'],
        'zanmatoLevel':1
    },

    'snow wolf':{
        'name':'Snow Wolf',
        'hp':400,
        'mp':50,
        'location':['Lake Macalania'],
        'zanmatoLevel':1
    },

    'spirit':{
        'name':'Spirit',
        'hp':10000,
        'mp':700,
        'location':['Omega Ruins'],
        'zanmatoLevel':1
    },

    'splasher single':{
        'name':'Splasher (Single)',
        'hp':200,
        'mp':2,
        'location':['Mt. Gagazet Cavern'],
        'zanmatoLevel':1
    },

    'splasher paired':{
        'name':'Splasher (Paired)',
        'hp':400,
        'mp':4,
        'location':['Mt. Gagazet'],
        'zanmatoLevel':1
    },

    'splasher trio':{
        'name':'Splasher (Trio)',
        'hp':600,
        'mp':6,
        'location':['Mt. Gagazet'],
        'zanmatoLevel':1
    },

    'swamp mafdet':{
        'name':'Swamp Mafdet',
        'hp':850,
        'mp':1,
        'location':['Via Purifico (Land)'],
        'zanmatoLevel':1
    },

    //T

    '':{
        'name':'',
        'hp':,
        'mp':,
        'location':[''],
        'zanmatoLevel':
    },

    '':{
        'name':'',
        'hp':,
        'mp':,
        'location':[''],
        'zanmatoLevel':
    },

    '':{
        'name':'',
        'hp':,
        'mp':,
        'location':[''],
        'zanmatoLevel':
    },

    '':{
        'name':'',
        'hp':,
        'mp':,
        'location':[''],
        'zanmatoLevel':
    },

    '':{
        'name':'',
        'hp':,
        'mp':,
        'location':[''],
        'zanmatoLevel':
    },

    '':{
        'name':'',
        'hp':,
        'mp':,
        'location':[''],
        'zanmatoLevel':
    },

    '':{
        'name':'',
        'hp':,
        'mp':,
        'location':[''],
        'zanmatoLevel':
    },

    '':{
        'name':'',
        'hp':,
        'mp':,
        'location':[''],
        'zanmatoLevel':
    },








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