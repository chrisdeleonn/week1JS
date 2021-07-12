// write a function to calculate tax

/*const _ = .07

function calculateTax(_) {
console.log(_)
}

console.log(calculateTax)*/

function calculateTax() {
    const taxRate = .07
    const tesla = 45000

    return (tesla  * taxRate)
}

console.log(calculateTax())
