console.log("Asad is hacker")
console.log("Zarrar is a hecker")


setTimeout(() => {
    console.log("I am inside timeout")
}, 2000);

setTimeout(() => {
    console.log("I am inside timeout 2")
}, 2000);

console.log("The End")

const callback = (arg) => { console.log(arg) }

const loadScript = (src, callback) => { 
    let sc = document.createElement("Script");
    sc.src = src;
    sc.onload = callback("Asad")
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)