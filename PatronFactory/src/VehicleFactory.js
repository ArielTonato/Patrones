import {Car, MotorCycle, Truck} from './vehicles.js';
class VehicleFactory{
    createVehicle(wheleer){
        switch(wheleer){
            case 4:
                return new Car();
            case 6:
                return new Truck();
            case 2:
                return new MotorCycle();
        }
    }
}

export default VehicleFactory;