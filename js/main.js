alert('Working')

document.querySelector('button').addEventListener('click', monsterGet)
async function monsterGet(){
    console.log('works')

    const monster = document.querySelector('#monsterInput').value
    const res = await fetch(`/api/${monster}`)
    const data = await res.json()

    console.log(data)    
    document.querySelector('#monsterName').textContent = data.name
    document.querySelector('#monsterHP').textContent = data.hp
    document.querySelector('#monsterMP').textContent = data.mp
    document.querySelector('#monsterLocation').textContent = data.location
    document.querySelector('#monsterZLevel').textContent = data.zanmatoLevel
}