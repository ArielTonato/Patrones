class Vehicle{
    constructor(wheleer, type){
        this.wheleer = wheleer;
        this.type = type;
    }

    getWheleer(){
        return this.wheleer;
    }

    getType(){
        return this.type;
    }
    description(){
        return `This is a ${this.type} with ${this.wheleer} wheels`;
    }
}

class Car extends Vehicle{
    constructor(){
        super(4, 'Car');
    }
}

class MotorCycle extends Vehicle{
    constructor(){
        super(2, 'MotorCycle');
    }
}

class Truck extends Vehicle{
    constructor(){
        super(6, 'Truck');
    }
}

export {Car, MotorCycle, Truck};