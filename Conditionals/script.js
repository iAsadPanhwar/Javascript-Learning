console.log("Hello, This is conditional Statement")

let age = 1;
let grace = 2;

// age += grace

console.log(age)
console.log(age + grace)
console.log(age - grace)
console.log(age / grace)
console.log(age * grace)
console.log(age ** grace)
console.log(age % grace)


if ((age+grace)==18){
    console.log("you can drive")
}
else {
    console.log("You cannot Drive")
}
/*
I am multi line 
Comment 
*/

// If Ladder

if ((age+grace)==18){
    console.log("you can drive")
}
else if(age==0){
    console.log("Are You kidding")
}
else if(age==1){
    console.log("Are You Again kidding")
}
else {
    console.log("You cannot Drive")
}

a = 6;
b = 8;

let c = a > b ? (a-b) : (b-a)

console.log(c)

/*
translates to:
if (a>b){
    let c = a-b;}
else {
let c = b-a}
*/