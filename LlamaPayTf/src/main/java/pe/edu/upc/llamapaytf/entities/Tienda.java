package pe.edu.upc.llamapaytf.entities;
import jakarta.persistence.*;

@Entity
@Table(name = "Tienda")
public class Tienda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Tienda_id;
    @Column(name = "Nombre_tienda", nullable = false, length = 30)
    private String Nombre_tienda;
    @Column(name = "Direccion", nullable = false, length = 50)
    private String Direccion;

    public Tienda() {
    }

    public Tienda(int idTienda, String Nombre_tienda, String Direccion) {
        this.idTienda = idTienda;
        this.Nombre_tienda = Nombre_tienda;
        this.Direccion = Direccion;
    }
    public int getIdTienda() {
        return Tienda_id;
    }
    public void setIdTienda(int idTienda) {
        this.Tienda_id = idTienda;
    }
    public String getNombre_tienda() {
        return Nombre_tienda;
    }
    public void setNombre_tienda(String Nombre_tienda) {
        this.Nombre_tienda = Nombre_tienda;
    }
    public String getDireccion() {
        return Direccion;
    }
    public void setDireccion(String Direccion) {
        this.Direccion = Direccion;
    }