// 1.   Create an object for your dream vehicle
//      Give it a minimum of 6 key-value pairs
//      This object should contain many datatypes (string, number, boolean, null, array)
const dreamVehicle = {
  runs: true,
  isClean: true,
  costInDollars: 0,
  fuel: "Electricity",
  color: "green",
  features: ["Bluetooth", "Power Windows", "Working Cabin Lights", "USB Ports"],
};

// 2.   Using dot-notation Log to the console 3 properties from the previous object
console.log(
  dreamVehicle.runs,
  dreamVehicle.isClean,
  dreamVehicle.costInDollars
);

// 3.   Using bracket-notation Log to the console 3 properties from the previous object
console.log(
  dreamVehicle["color"],
  dreamVehicle["features"],
  dreamVehicle["fuel"]
);

// 4.   Try and log a property that doesn't already exist - what output do we get?
// Undefined

// 5.   Add a new key-value pair to the vehicle.
dreamVehicle.doors = 4;

// 6.   Using bracket-notation update a property on the vehicle.
dreamVehicle["color"] = "blue";

// 7.   Using dot-notation update a property on the vehicle.
dreamVehicle.isClean = false;

// 8.   Create a method for turning your vehicle on
dreamVehicle.isStarted = false;
function startCar() {
  dreamVehicle.isStarted = true;
}

dreamVehicle.startCar = startCar;

// 9.   Create a method for turning your vehicle off
function turnCarOff() {
  dreamVehicle.isStarted = false;
}
dreamVehicle.turnCarOff = turnCarOff;
//10.
//      a. Check if your vehicle is on (it should be off)
console.log(dreamVehicle.isStarted);

//      b. Start your vehicle
dreamVehicle.startCar();


//      e. Check if your vehicle is on (it should be on)
console.log(dreamVehicle.isStarted);