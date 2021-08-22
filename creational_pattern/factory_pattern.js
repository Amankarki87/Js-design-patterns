class IceCreamFactory {
    constructor() {
        this.createIceCream = function(flavor) {
            let iceCream;
            if ( flavor === 'chocolate' ) {
                iceCream = new Chocolate();
            } else if (flavor === 'strawberry' ) {
                iceCream = new Strawberry();
            }
            return iceCream;
        }
    }
}

class Chocolate {
    message() {
        console.log("Chocolate icecream");
    }
}

class Strawberry {
    message() {
        console.log("Strawberry icecream");
    }
}

const iceCreamFactory = new IceCreamFactory();
let chocolate = iceCreamFactory.createIceCream("chocolate");
let strawberry = iceCreamFactory.createIceCream("strawberry");
chocolate.message();
strawberry.message();