console.log("Hello world!")

let cont = document.body.childNodes[1];
console.log(cont.lastChild)
console.log(cont.firstChild)
console.log(cont.firstElementChild)
console.log(cont.lastElementChild)

cont.lastElementChild.style.color = "black";
cont.lastElementChild.style.backgroundColor = "red";

console.log(document.body.firstElementChild.children[3].nextElementSibling)
console.log(document.body.firstElementChild.children[3].previousElementSibling)
console.log(document.body.firstElementChild.children[3].parentElement)

console.log(document.body.children[1].rows)
console.log(document.body.children[1])