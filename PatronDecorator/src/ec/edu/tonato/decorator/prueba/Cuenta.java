/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.tonato.decorator.prueba;

/**
 *
 * @author Asus
 */
public abstract class Cuenta implements ICuenta{
    private String cliente;
    private int costo;

    public Cuenta(String cliente, int costo) {
        this.cliente = cliente;
        this.costo = costo;
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }

    public int getCosto() {
        return costo;
    }

    public void setCosto(int costo) {
        this.costo = costo;
    }
    
    
}
