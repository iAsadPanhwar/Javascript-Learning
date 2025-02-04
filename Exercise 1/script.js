let random = Math.random
let a = prompt("Enter first Numer")
let b = prompt("Enter Second Numer")
let c = prompt("Enter Operation Numer")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "*"
}

if (random>0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c =obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}