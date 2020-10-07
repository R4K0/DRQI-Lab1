class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information() {
        console.log(`Make: ${this.make}`)
        console.log(`Model: ${this.model}`)
        console.log(`Year: ${this.year}`)
    }
}

class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);

        this.doors = doors;
    }


    Information() {
        super.Information();

        console.log(`Doors: ${this.doors}`)
    }
}

module.exports = {
    Vehicle,
    Car
}

// Tests are located in tests.js - Run test command (npm run test) or node tests.js