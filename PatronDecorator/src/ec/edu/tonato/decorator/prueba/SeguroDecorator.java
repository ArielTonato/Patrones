/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.tonato.decorator.prueba;

/**
 *
 * @author Asus
 */
public class SeguroDecorator extends CuentaDecorator {

    public SeguroDecorator(ICuenta cuentaDecorada) {
        super(cuentaDecorada);
    }

    @Override
    public String mostrarCliente() {
        return this.getCuentaDecorada().mostrarCliente()+"y se le ha añadido un seguro";
    }

    @Override
    public int mostrarCosto() {
        System.out.println("Con costo de 20$");
        return this.getCuentaDecorada().mostrarCosto()+20;
    }

}
