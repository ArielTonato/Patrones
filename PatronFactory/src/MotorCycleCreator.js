import { MotorCycle } from "./vehicles.js";
class MotorCycleCreator{
    createVehicle(){
        return new MotorCycle();
    }
}
export default MotorCycleCreator;