import SeguroDecorador from "./decorators/SeguroDecorador.js";
import PagosDecorador from "./decorators/PagosDecorador.js";
import CuentaAhorros from "./models/CuentaAhorros.js";
import CuentaCorriente from "./models/CuentaCorriente.js";

// let cuentaAhorros = new CuentaAhorros(1, "Juan");
// cuentaAhorros = new SeguroDecorador(cuentaAhorros);
// cuentaAhorros = new PagosDecorador(cuentaAhorros);
// cuentaAhorros.abrirCuenta();

const cedula = document.querySelector("#cedula");
const nombres = document.querySelector("#nombres");
const tipoCuenta = document.querySelector("#cuenta");
const boton = document.querySelector("#boton");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click", (event) => {
    event.preventDefault();
    let cuenta = null;
    let serviciosAdicionales = "";
    let cliente = nombres.value;
    let id = cedula.value;
    if (tipoCuenta.value === "Ahorros") {
        cuenta = new CuentaAhorros(cedula.value, nombres.value);
    } else {
        cuenta = new CuentaCorriente(cedula.value, nombres.value);
    }

    if (document.querySelector("#seguro").checked) {
        cuenta = new SeguroDecorador(cuenta);
        serviciosAdicionales += "Seguro de vida ($20) ";
    }
    if (document.querySelector("#pagos").checked) {
        if (serviciosAdicionales !== "") {
            serviciosAdicionales += "y ";
        }
        cuenta = new PagosDecorador(cuenta);
        serviciosAdicionales += "Pagos de servicios ($10) ";
    }

    if (serviciosAdicionales !== "") {
        serviciosAdicionales = ` con ${serviciosAdicionales}agregados`;
    }
    console.log(cuenta.abrirCuenta());
    const costoFinal = cuenta.getCosto();
    resultado.classList.remove("oculto");
    resultado.innerText = `Cuenta abierta para el cliente ${cliente} con cedula ${id} y un costo final de ${costoFinal}$${serviciosAdicionales}.`;
});
