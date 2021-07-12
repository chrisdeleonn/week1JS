/*const myName = "Chris"

console.log('Hello ' + myName)*/

// define a func for isDrinkingAge
//given an age - say if someone is drinking or not

function isDrinkingAge(age) {
    if(age < 21 ) {
        return console.log('not drinking age')
    } else {
        return console.log('legal drinking age')
    }
}

let userAge = 24
isDrinkingAge(userAge)
