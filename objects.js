/*
//practice objects
let person = {
    firstname: "Chris",
    age: 29,
    sauce: true,
}
//dot notation => object referencing
console.log(person.firstname) 

//inefficient way 
const subtotal = order.subtotal
const subtotal = order.subtotal
const subtotal = order.subtotal
const subtotal = order.subtotal

//efficient way
const {subtotal, total, taxtotal, customerName} = order

//how to add a new property to the order
order.customerLastName = "De Leon"
*/

//practice objects
const mangos = {
    taste: "delicious",
    color: "orange",
    source: "trees",
    climate: "tropical / subtropical",
    price: 0.79,
    pit: true,
    allergen: true,
}


const lobster = {
    taste: "buttery",
    color: "red",
    source: "ocean",
    climate: "tropical / subtropical",
    price: 19.99,
    pit: false,
    allergen: true,
}

const bacon = {
    taste: "heaven",
    color: "rust",
    source: "pigs",
    climate: "tropical / subtropical",
    price: 19.99,
    pit: false,
    allergen: true,
}

function isAllergen(food) {
    if(food.allergen === true) {
        console.log("*** this food is a known allergen. ***")
    } else {
        console.log("this food is safe for most people.")
    }
}

isAllergen(mangos)

//objects should be related
