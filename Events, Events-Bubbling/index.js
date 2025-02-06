let child = document.querySelector(".child")
child.addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("child was clicked")
})


let childcontainer = document.querySelector(".childcontainer")
childcontainer.addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("child container was clicked")
})


let container = document.querySelector(".container")
container.addEventListener("click",(e)=>{
    alert("container was clicked")
})

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()*255)
    let val2 = Math.ceil(0 + Math.random()*255)
    let val3 = Math.ceil(0 + Math.random()*255)

    return `rgb(${val1} ${val2} ${val3})`
}

setInterval(() => {
    child.style.backgroundColor = getRandomColor()
}, 50);

setTimeout(() => {
    childcontainer.style.backgroundColor = getRandomColor()
    
}, 1000);