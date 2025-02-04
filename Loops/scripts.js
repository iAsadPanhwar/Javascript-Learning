console.log("Hello World!")

let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

for (let i = 0; i < 100; i++) {
    console.log(a+i)
}

let obj = {
    name: "Bob",
    role: "Programmer",
    company: "Facebook"
}

for (const key in obj) {
        console.log(key)
}

for (const c of "Programmer") {
    console.log(c)
}


let i = 0;
while (i<6){
    console.log(i);
    i++;
}


let j = 10;
do {
    console.log(j)
    j++
} while (j<6);