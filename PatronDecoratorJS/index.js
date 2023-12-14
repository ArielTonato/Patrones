import CuentaAhorros from "./CuentaAhorros.js";
import SeguroDecorado from "./SeguroDecorador.js";

let cuenta = new CuentaAhorros("Juan",200);
cuenta = new SeguroDecorado(cuenta);
console.log(cuenta.verCliente());
console.log(cuenta.verCosto());