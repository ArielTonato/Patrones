import ICuenta from "../models/ICuenta.js";
class PagosDecorador extends ICuenta{
    constructor(cuenta){
        super(cuenta);
    }

    abrirCuenta(){
        this.cuenta.setCosto(this.getCosto()+10);
        return `Pagos de servicios con un costo de 10$ agregado a la cuenta de ${this.cuenta.abrirCuenta()}`;
    }

    getCosto(){
        return this.cuenta.getCosto();
    }

    setCosto(costo){
        this.cuenta.setCosto(costo);
    }
}

export default PagosDecorador;