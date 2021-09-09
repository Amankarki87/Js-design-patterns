let orderNumber = 0;
class PlaceFoodOrder {
    placeOrder(orderDetails) {
        const orderId = PlaceFoodOrder.generateId();
        let chef;
        if (orderDetails.foodType === "Main Course") {
            chef = new MainCourseChef();
        }

        return chef.addFoodOrder({orderId,orderDetails});
    }

    static generateId() {
        return ++orderNumber;
    }
}

class FoodOrders {
    constructor() {
        this.orders = [];
    }

    addFoodOrder(order) {
        return this.conveyOrder(order);
    }
}

class MainCourseChef extends FoodOrders {
    constructor() {
        super();
        this.assigned = true;
        return this;
    }

    timeToMakeOrder() {
        return Math.floor(Math.random() * 50) + 10;
    }

    conveyOrder({orderId,orderDetails}) {
        const time = this.timeToMakeOrder();
        console.log(`Order number ${orderId}: ${orderDetails.foodDetails} will be server in ${time} minutes`);
    }
}

const customerOrder = new PlaceFoodOrder();
customerOrder.placeOrder({foodType: "Main Course",foodDetails: "Pasta with shirmps"});
customerOrder.placeOrder({foodType: "Main Course",foodDetails: "Pizza with shirmps"});