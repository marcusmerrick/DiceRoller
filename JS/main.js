let dieRolls = []
const rollDice = document.querySelector('#roll')

rollDice.addEventListener('click', function() {
    let number = document.getElementById('#dice').value
    
})

function diceRandom () {
    return 1 + Math.floor(Math.random()*6)
}
console.log(diceRandom)