console.log("This is promise of code Execution")

let prom1 = new Promise((resolve, reject) => { 
    let a = Math.random();
    if (a<0.5){
        reject("No random number was not supporting you.")
    }
    else{setTimeout(() => {
        console.log("Yes I am done")
        resolve("Asad")
    }, 3000);}
    
})

let prom2 = new Promise((resolve, reject) => { 
    let a = Math.random();
    if (a<0.5){
        reject("No random number was not supporting you 2.")
    }
    else{setTimeout(() => {
        console.log("Yes I am done 2")
        resolve("Asad")
    }, 3000);}
    
})

let prom3 = Promise.race([prom1, prom2])

prom3.then(
    (a) => { console.log(a) }
).catch((err) => { console.log(err) })