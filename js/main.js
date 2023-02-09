alert('Working')

window.onload = listLoader()

async function listLoader(){
    console.log('getting monster list...')

    const res = await fetch(`/api/all`)
    const data = await res.json()

    // console.log(data)

    const mons = Object.keys(data)

    console.log(mons)

    mons.forEach((key, index) =>{
        let newOption = document.createElement('option')
        newOption.value = key
        newOption.innerText = `${data[key].name}`
        document.querySelector('#monsterSelect').appendChild(newOption)
    })

}

document.querySelector('select').addEventListener('change', monsterGet, false)
async function monsterGet(){
    console.log('works')

    const monster = document.querySelector('#monsterSelect').value
    const res = await fetch(`/api/${monster}`)
    const data = await res.json()

    console.log(data)    
    document.querySelector('#monsterName').textContent = data.name
    document.querySelector('#monsterHP').textContent = data.hp
    document.querySelector('#monsterMP').textContent = data.mp
    document.querySelector('#monsterLocation').textContent = data.location
    document.querySelector('#monsterZLevel').textContent = data.zanmatoLevel
}

// document.querySelector('button').addEventListener('click', monsterGet)
// async function monsterGet(){
//     console.log('works')

//     const monster = document.querySelector('#monsterInput').value
//     const res = await fetch(`/api/${monster}`)
//     const data = await res.json()

//     console.log(data)    
//     document.querySelector('#monsterName').textContent = data.name
//     document.querySelector('#monsterHP').textContent = data.hp
//     document.querySelector('#monsterMP').textContent = data.mp
//     document.querySelector('#monsterLocation').textContent = data.location
//     document.querySelector('#monsterZLevel').textContent = data.zanmatoLevel
// }