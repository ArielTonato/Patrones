class ICuenta{
    constructor(cuenta){
        if (this.constructor === ICuenta) {
            throw new Error("No se puede instanciar la clase abstracta");
        }
        this.cuenta = cuenta;
    }
    abrirCuenta(){
        throw new Error("No implementado");
    }

    getCosto(){
        throw new Error("No implementado");
    }

    setCosto(costo){
        throw new Error("No implementado");
    }
}
export default ICuenta;