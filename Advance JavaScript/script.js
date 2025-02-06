//IIFE

async function sleep(){
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve(45)
        }, 1000);
     })
}

(async function main(){

    let a = await sleep()
    console.log(a)
    
})()

let [x,y, ...rest] = [1,5,6,7,8]
console.log(x,y,rest)

let obj = {
    a:1,
    b:2,
    c:3
}

let {a,b} = obj
console.log(a,b)

function sum(a,b,c){
    return a+b+c
}

let arr = [1,2,3]
console.log(sum(...arr))
