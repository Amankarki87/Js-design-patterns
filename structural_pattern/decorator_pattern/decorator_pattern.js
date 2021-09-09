class FrozenYoghurt {
    constructor(flavor,price) {
        this.flavor = flavor;
        this.price = price;
    }

    orderPlaced() {
        console.log(`The ${this.flavor} flavor will cost you ${this.price} dollars`);
    }
}

// decorator 1

function addFlavors(yoghurt) {
    yoghurt.addStrawberry = true;
    yoghurt.addVanilla = true;
    yoghurt.price += 20;
    yoghurt.updateInfo = function () {
        console.log(`The updated price after adding flavours is ${yoghurt.price} dollars`);
    }

    return yoghurt;
}

// decorator 2
function addToppings(yoghurt) {
    yoghurt.hasSprinkles = true;
    yoghurt.hasBrownie =  true;
    yoghurt.hasWafers = true;
    yoghurt.allToppings = function(){
      console.log("Your yoghurt has sprinkles, brownie, and wafers")
    }
    return yoghurt;
}

const chocolateYoghurt = new FrozenYoghurt("chocolate",10);
chocolateYoghurt.orderPlaced();
var addFlavorsInChocolate = addFlavors(chocolateYoghurt);
addFlavorsInChocolate.updateInfo();

var addToppingsInChocolate = addToppings(chocolateYoghurt);
addToppingsInChocolate.allToppings();