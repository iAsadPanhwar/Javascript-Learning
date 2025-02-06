class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }

    eats(){
        console.log("Kha kr rha hu")
    }

    jumps(){
        console.log("Jump kr rha hu")
    }
}

class Lion extends Animal {
    constructor(name){
        super(name)
        console.log("Object is created and he is a lion...")
    }

    eats(){
        super.eats()
        console.log("Kha kr rha hu Roar")
    }

}

let a = new Animal("Bunny");

let l = new Lion("Shera")
console.log(a)
console.log(l)