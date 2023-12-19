class Cuenta{
    constructor(id, cliente, costo){
        if(this.constructor == Cuenta){
            throw new Error("No se puede instanciar la clase Cuenta");
        }
        this.id = id;
        this.cliente = cliente;
        this.costo = costo;
    }
    abrirCuenta(){
        throw new Error("El metodo abrirCuenta() no se debe llamar en la clase padre Cuenta");
    }

    getCosto(){
        throw new Error("El metodo getCosto() no se debe llamar en la clase padre Cuenta");
    }

    setCosto(costo){
        throw new Error("El metodo setCosto() no se debe llamar en la clase padre Cuenta");
    }
}
export default Cuenta;