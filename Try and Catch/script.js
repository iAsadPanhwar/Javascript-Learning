let a = prompt("Enter first Number")

let b = prompt("Enter second Number")

let sum = parseInt(a) + parseInt(b)

function main(){
    
    let x = 1;
    if(isNaN(a) || isNaN(b)){
        throw SyntaxError("Sorry this is not allowed.")
    }
    try {
        console.log("The sum is", sum*x)
        return true
    } catch (error) {
        console.log("Error")
        return false
    }
    
    finally{
        console.log("files are being close and db connection is being closed")
    }
}

let c = main()
    