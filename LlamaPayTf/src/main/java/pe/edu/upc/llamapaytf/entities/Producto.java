package pe.edu.upc.llamapaytf.entities;

import jakarta.persistence.*;

@Entity
@Table(name="Producto")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idproducto;
    @Column(name = "nombreproducto", nullable = false, length = 30)
    private String nombreproducto;
    @Column(name = "descripcion", nullable = false, length = 50)
    private String descripcion;
    @Column(name = "unidadmedida", nullable = false, length = 20)
    private String unidadmedida;
    @Column(name = "precioproducto", nullable = false, length = 10)
    private int precioproducto;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "idtienda", nullable = false)
    private Tienda tienda;

    public Producto() {
    }

    public Producto(int idproducto, String nombreproducto, String descripcion, String unidadmedida, int precioproducto, User user, Tienda tienda) {
        this.idproducto = idproducto;
        this.nombreproducto = nombreproducto;
        this.descripcion = descripcion;
        this.unidadmedida = unidadmedida;
        this.precioproducto = precioproducto;
        this.user = user;
        this.tienda = tienda;
    }

    public int getIdproducto() {
        return idproducto;
    }

    public void setIdproducto(int idproducto) {
        this.idproducto = idproducto;
    }

    public String getNombreproducto() {
        return nombreproducto;
    }

    public void setNombreproducto(String nombreproducto) {
        this.nombreproducto = nombreproducto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUnidadmedida() {
        return unidadmedida;
    }

    public void setUnidadmedida(String unidadmedida) {
        this.unidadmedida = unidadmedida;
    }

    public int getPrecioproducto() {
        return precioproducto;
    }

    public void setPrecioproducto(int precioproducto) {
        this.precioproducto = precioproducto;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Tienda getTienda() {
        return tienda;
    }

    public void setTienda(Tienda tienda) {
        this.tienda = tienda;
    }
}
