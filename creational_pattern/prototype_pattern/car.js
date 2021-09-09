var car = {
    drive() {
        console.log("started driving");
    },
    brake() {
        console.log("Stopping the car");
    },
    numOfWheels: 4
}

const car1 = Object.create(car);
car1.drive();
const car2 = Object.create(car);

