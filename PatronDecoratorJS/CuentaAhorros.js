import Cuenta from "./Cuenta.js";
class CuentaAhorros extends Cuenta{
    constructor(cliente,costo){
        super(cliente,costo);
    }

    verCliente(){
        return `Cliente: ${this.cliente}`;
    }
    getCosto(){
        return this.costo;
    }
    verCosto(){
        return `Costo: ${this.costo}`;
    }
}
export default CuentaAhorros;