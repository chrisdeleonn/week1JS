/*
const hotDogStack = ["🌭", "🌭", "🌭", "🌭", "🌭"]
console.log(hotDogStack.length)
*/
// build a function that uses a callback
/*
function getHotDog(callback) {
    if(!hotDogStack.length) {
        // have no dogs
        throw "no more hot dogs for today! 🥲"
    }
    const hotdog = hotDogStack.pop()
    //return hotdog
    callback(hotdog)
}
*/


// call a function w/a callback
/*
try {
    getHotDog(
        (hotdog) => console.log("i ate the ", hotdog))
}
catch(error) {
    console.error(error)
}
*/