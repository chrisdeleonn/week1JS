//Problem1: Breaking down the function using the whiteboard 
/*
function isSumTen(a, b) {
    const sum = a + b
    if(sum === 10) {
        return true
    } else {
        return false
    }
}
const num1 = 2
const num2 = 4
console.log(isSumTen(num1, num2))
*/

//ternary method for the above function - play with more
/*
const result = (sum === 10)?
true : false
return result
*/

//Problem2: Breaking down the function using the whiteboard
/*
const num = 3
const den = 4

function isGreaterOne(a, b) {
    const result = a / b
    if(result <= 1){
        return false
    } else {
        return true
    }
}
console.log(isGreaterOne(num, den))
*/

//how to create user input
/*
const input = prompt("what's your name?");
alert("your anme is ${input}");
*/

//Problem3: Breaking down the method

/*
function addArrayItems(items) {
let sum = 0
for(let i = 0; i < items.length; i++) {
    sum = sum + items[i]
    }
    return sum
}
const numGroup = [5, 10, 15, 20, 25]

console.log(addArrayItems(numGroup))
*/

//Problem: Breaking down the function that returns an absolute value
/*
const isAbsValue = (a) => {
if(a > 0) {
        return a
    } else {
        return a * -1
    }
}   
console.log(isAbsValue(-10))
*/

//Problem: Function that calculates the area of a rectangle
const length = 5
const width = 7

function calcArea(a, b) {
    console.log(a * b)
}
calcArea(length, width)


