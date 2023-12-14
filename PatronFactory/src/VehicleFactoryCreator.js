class VehicleFactoryCreator{
    constructor(creator){
        this.creator = creator;
    }

    createVehicle(){
        return  this.creator.createVehicle();
    }
}

export default VehicleFactoryCreator;