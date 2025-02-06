// async function getData(){
//     return new Promise((resolve, reject) => { 
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }

// Settle means resolve or reject
// resolve means promise has settles successfully
// Reject means promise has not settled successfully

async function getData(){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data)
}

async function main(){
    console.log("Loading modules")
    console.log("Load Data")

    let data = await getData()

    console.log(data)
    console.log("Process Data")
    console.log("task 2")
}

main()


// data.then((v) => { 

//     console.log(data)
//     console.log("Process Data")
//  })



