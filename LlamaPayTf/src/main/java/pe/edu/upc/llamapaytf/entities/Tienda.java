package pe.edu.upc.llamapaytf.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Tienda")
public class Tienda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idtienda;
    @Column(name = "nombretienda", nullable = false, length = 30)
    private String nombretienda;
    @Column(name = "direccion", nullable = false, length = 50)
    private String direccion;

    public Tienda() {
    }

    public Tienda(int idtienda, String nombretienda, String direccion) {
        this.idtienda = idtienda;
        this.nombretienda = nombretienda;
        this.direccion = direccion;
    }

    public int getIdtienda() {
        return idtienda;
    }

    public void setIdtienda(int idtienda) {
        this.idtienda = idtienda;
    }

    public String getNombretienda() {
        return nombretienda;
    }

    public void setNombretienda(String nombretienda) {
        this.nombretienda = nombretienda;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
}
