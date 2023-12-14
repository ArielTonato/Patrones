class Counter{
    #counter = 0;
    #instance;
    constructor(){
        if(this.#instance){
            throw new Error("Solo se puede crear una instancia");
        }
        return this.#instance;
    }
    getInstance(){
        return this.#instance;
    }
    increment(){
        this.#counter++;
    }
    decrement(){
        this.#counter--;
    }
    getCounter(){
        return this.#counter;
    }
}

const singleton = Object.freeze(new Counter());
export default singleton;