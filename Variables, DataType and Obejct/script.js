console.log("Hello World!")

var a = 5;
var b = 6;
var c = "Asad"

console.log(a+b)
console.log(c)
console.log(typeof a, typeof b, typeof c)

// const cannot be changed
// let is used for intializing the global variable and block scope
// var variable can be used anywhere

let x= 10;

{
    let x = 20;
    console.log(x) // This should print 20 and scope is limited to this block of code.
}

console.log(x) // This should be 10 because this is outside of previous code block.

// var is for global variables
{
    var a = 55;
    console.log(a) 
}

console.log(a)

let n = "Asad Bhai";
let m = 22;
let o = 3.55;

const p = true;

let q = undefined;
let r = null;

console.log(n, m, o, p, q, r)
console.log(typeof n, typeof m, typeof o, typeof p, typeof q, typeof r)

let variable = {
    "name": "Asad",
    "job role": "Software Engineer",
    is_handsome: true
}

console.log(variable)

variable.salary = "100crores"

console.log(variable)