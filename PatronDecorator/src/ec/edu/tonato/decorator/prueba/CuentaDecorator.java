/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.tonato.decorator.prueba;

/**
 *
 * @author Asus
 */
public abstract class CuentaDecorator implements ICuenta{
    private ICuenta cuentaDecorada;

    public CuentaDecorator(ICuenta cuentaDecorada) {
        this.cuentaDecorada = cuentaDecorada;
    }

    public ICuenta getCuentaDecorada() {
        return cuentaDecorada;
    }
    
}
