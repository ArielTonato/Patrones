/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.tonato.decorator.prueba;

/**
 *
 * @author Asus
 */
public class CuentaAhorros extends Cuenta {

    public CuentaAhorros(String cliente, int costo) {
        super(cliente, costo);
    }

    @Override
    public String mostrarCliente() {
       return "Se ha creado la cuenta al nombre de: "+this.getCliente();
    }

    @Override
    public int mostrarCosto() {
        System.out.println("Se ha creado la cuenta con un costo de: "+this.getCosto());
        return this.getCosto();
    }
    
}
