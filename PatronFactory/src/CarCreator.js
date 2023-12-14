import {Car} from './vehicles.js';
class CarCreator{
    createVehicle(){
        return new Car();
    }
}

export default CarCreator;