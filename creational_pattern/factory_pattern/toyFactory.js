class ToyFactory {
    constructor() {
        this.createToy = function (type,color,price,name) {
            let toy;
            if (type === "duck") {
                toy = new ToyDuck(color,price);
            } else if (type === "car") {
                toy = new ToyCar(color,price,name);
            }
            return toy;
        }
    }
}

class ToyDuck {
    constructor(color,price) {
        this.color = color;
        this.price = price;
    }

    message() {
        console.log(`Duck color is ${this.color} and price is ${this.price}`);
    }
}

class ToyCar {
    constructor(color,price,name) {
        this.color = color;
        this.price = price;
        this.name = name;
    }

    message() {
        console.log(`Car Toy color is ${this.color} and price is ${this.price} and name is ${this.name}`);
    }
}

let toy = new ToyFactory();
let duckToy = toy.createToy("duck","red",10);
duckToy.message();
let carToy = toy.createToy("car","red",10,"ferrari");
carToy.message();