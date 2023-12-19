import ICuenta from "../models/ICuenta.js";
class SeguroDecorador extends ICuenta{
    constructor(cuenta){
        super(cuenta);
    }

    abrirCuenta(){
        this.cuenta.setCosto(this.getCosto()+20);
        return `Seguro de vida agregado con un costo de 20$ a la cuenta de ${this.cuenta.abrirCuenta()}`;
    }

    getCosto(){
        return this.cuenta.getCosto();
    }

    setCosto(costo){
        this.cuenta.setCosto(costo);
    }
}

export default SeguroDecorador;