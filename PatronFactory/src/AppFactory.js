import VehicleFactory from "./VehicleFactory.js";

// const factory = new VehicleFactory();
// const car = factory.createVehicle(4);
// console.log(car.description());
// const truck = factory.createVehicle(6);
// console.log(truck.description());
// const motorCycle = factory.createVehicle(2);
// console.log(motorCycle.description());

import CarCreator from "./CarCreator.js";
import TruckCreator from "./TruckCreator.js";
import MotorCycleCreator from "./MotorCycleCreator.js";
import VehicleFactoryCreator from "./VehicleFactoryCreator.js";
let factory = new VehicleFactoryCreator(new CarCreator());
const car = factory.createVehicle();
console.log(car.description());
factory = new VehicleFactoryCreator(new TruckCreator());
const truck = factory.createVehicle();
console.log(truck.description());
factory = new VehicleFactoryCreator(new MotorCycleCreator());
const motorCycle = factory.createVehicle();
console.log(motorCycle.description());
