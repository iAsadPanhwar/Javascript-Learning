let arr = [1,2,3,4,5]
let newArr = []

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element**2)
}

console.log(newArr)

let arr1 = []
arr1 = arr.map(e=>{
    return e**2
})
console.log(arr1)
const greaterThanSeven = (e)=> e>7;
console.log(newArr.filter(greaterThanSeven))