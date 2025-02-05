console.log("Asad")

let boxes = document.body.getElementsByClassName("box")

console.log(boxes)
console.log(boxes[2])

boxes[2].style.backgroundColor = "red"

let boxes_1 = document.getElementById("two")

console.log(boxes_1)

boxes_1.style.backgroundColor = "black"

document.querySelector(".box").style.backgroundColor = "green";

let allElements = document.querySelectorAll(".box")

console.log(allElements)

allElements.forEach(e=>{
    e.style.backgroundColor = "green"
})

console.log(document.getElementsByTagName("div"))

let e = document.getElementsByTagName("div")

console.log(e[1].matches("onebox"))