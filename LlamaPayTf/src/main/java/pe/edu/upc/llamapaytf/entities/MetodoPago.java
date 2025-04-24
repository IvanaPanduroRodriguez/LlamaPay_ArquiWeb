package pe.edu.upc.llamapaytf.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "MetodoPago")
public class MetodoPago {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MetodoPago_id")
    private int id;

    @Column(name = "Nombre_metodoPago", nullable = false, length = 30)
    private String nombreMetodoPago;

    @Column(name = "Tipo_metodoPago", nullable = false, length = 30)
    private String tipoMetodoPago;

    @Column(name = "descripcion", nullable = true, columnDefinition = "TEXT")
    private String descripcion;

    public MetodoPago() {}

    public MetodoPago(int id, String nombreMetodoPago, String tipoMetodoPago, String descripcion) {
        this.id = id;
        this.nombreMetodoPago = nombreMetodoPago;
        this.tipoMetodoPago = tipoMetodoPago;
        this.descripcion = descripcion;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreMetodoPago() {
        return nombreMetodoPago;
    }

    public void setNombreMetodoPago(String nombreMetodoPago) {
        this.nombreMetodoPago = nombreMetodoPago;
    }

    public String getTipoMetodoPago() {
        return tipoMetodoPago;
    }

    public void setTipoMetodoPago(String tipoMetodoPago) {
        this.tipoMetodoPago = tipoMetodoPago;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}

