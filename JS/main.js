//variables
let dieRolls = []
const rollDice = document.querySelector('.roll')
const numDie = document.querySelector('.numDie')
const total = document.querySelector('#total')
const show = document.querySelector('.show')
const sumResults = document.querySelector('.sumResults')
const numSides = document.querySelector('.numSides')
const ok = document.querySelector('#ok')

//functions
function diceRandom() {
    return 1 + Math.floor(Math.random()*(numSides.value))
}

//Dice roll and total
rollDice.addEventListener('click', function() {
    let numDieValue = numDie.value   
    for(let i = 0; i < numDieValue; i++){
        dieRolls.push(diceRandom())
    }
    console.log(dieRolls)
    let reduceTotal = dieRolls.reduce((a, b) => a + b)
   console.log(reduceTotal)
total.innerHTML = reduceTotal
})

//Show All
show.addEventListener('click', function() {
    
    console.log(dieRolls)
        for(let j = 0; j < dieRolls.length; j++) {
       console.log(dieRolls[j])
       sumResults.innerHTML += "<li>" + dieRolls[j] + '</li>'
       
    }
})

//Reset Button
reset.addEventListener('click', function() {
    location.reload()
})

