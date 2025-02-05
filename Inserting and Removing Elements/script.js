console.log("Hello world")

let div = document.createElement("div")

div.innerHTML = "I have been inserted by <b>Asad</b>"
div.setAttribute("class", "created")

document.querySelector(".container").before(div)

let cont = document.querySelector(".container")

cont.insertAdjacentHTML("afterbegin", "<b>I am under the water. Please help me </b>")

document.querySelector(".container").classList