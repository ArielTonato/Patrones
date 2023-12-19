import Cuenta from './Cuenta.js';
class CuentaAhorros extends Cuenta{
    constructor(id, cliente){
        super(id, cliente, 5);
    }

    abrirCuenta(){
        return `Cuenta de ahorros abierta para el cliente ${this.cliente} con cedula ${this.id} y un costo de ${this.costo}$`;
    }
    getCosto(){
        return this.costo;
    }

    setCosto(costo){
        this.costo = costo;
    }
}
export default CuentaAhorros;