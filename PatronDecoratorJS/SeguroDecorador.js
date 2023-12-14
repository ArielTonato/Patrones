class SeguroDecorado{
    constructor(cuenta){
        this.cuenta = cuenta;
    }

    verCliente(){
        return this.cuenta.verCliente() + " se ha añadido un seguro";
    }

    verCosto(){
        this.cuenta.costo += 20;
        return this.cuenta.verCosto();
    }
}
export default SeguroDecorado;