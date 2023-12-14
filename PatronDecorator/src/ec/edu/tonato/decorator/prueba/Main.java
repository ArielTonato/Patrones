/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.tonato.decorator.prueba;

/**
 *
 * @author Asus
 */
public class Main {
    public static void main(String[] args) {
        ICuenta cuentaAhorros = new CuentaAhorros("Juan Carlos", 20);
        cuentaAhorros = new SeguroDecorator(cuentaAhorros);
        
        // Mostrar cliente con decorador
        System.out.println(cuentaAhorros.mostrarCliente());
        
        // Mostrar costo con decorador
        System.out.println("Costo total: " + cuentaAhorros.mostrarCosto());
    }
}
