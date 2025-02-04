console.log("Hey How are you?")
console.log("I am fine.")
console.log("What about you?")
console.log("I am also fine")

function nice(name) {
    console.log("Hey " + name + " You are nice!")
    console.log("Hey " + name + " You are good")
    console.log("Hey " + name + " your tshirt is good")
    console.log("Hey " + name + " your course is good")
}

nice("Asad")
nice("Rohan")

// function add(a, b){
//     return a + b
// }

// result = add(4,5)

// console.log("The sum of these numbers is: ", result)

// Optional Parameter
function add(a, b, c = 4){
    return a + b + c
}

result = add(4,5, 10)

console.log("The sum of these numbers is: ", result)


// const func1 = (x) => {
//     console.log("I am arrow function: ", x)
// }

// func1(34)
const func1 = (a, b) => {
    return a+b
}

res = func1(10,10)

console.log(res)