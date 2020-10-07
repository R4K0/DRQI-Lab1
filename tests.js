const BMI = require("./bmi");
const {Vehicle, Car} = require("./car");

let myBMI = new BMI(86, 1.7);
console.log(myBMI.calculateBMI());

let myVehicle = new Vehicle("VW", "Golf", "2000");
myVehicle.Information();

let myCar = new Car("VW", "Golf X", "2010", 4);
myCar.Information();