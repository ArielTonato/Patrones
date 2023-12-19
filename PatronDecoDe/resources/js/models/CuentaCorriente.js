import Cuenta from "./Cuenta.js";
class CuentaCorriente extends Cuenta{
    constructor(id, cliente) {
        super(id, cliente, 10);
    }
    
    abrirCuenta(){
        return `Cuenta corriente abierta para el cliente ${this.cliente} con cedula ${this.id} y un costo de ${this.costo}$`;
    }
    getCosto(){
        return this.costo;
    }

    setCosto(costo){
        this.costo = costo;
    }
}
export default CuentaCorriente;