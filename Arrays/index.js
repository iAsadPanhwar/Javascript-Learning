let arr = [1,2,4,5,7]

console.log(arr)
console.log(arr.length)
console.log(arr[0])

arr[0] = 10

console.log(arr, typeof arr)

console.log(arr.toString())
console.log(arr.join(" and "))
console.log(arr.pop())
arr.push(100)
console.log(arr)
console.log(arr.shift())
arr.unshift("Asad")
console.log(arr)
delete arr[0]
console.log(arr)

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]


console.log(a1.concat(a2,a3))

let numbers = [1,2,3,4,5]
numbers.splice(3, 4, 10, 20)
console.log(numbers)


