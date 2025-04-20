package pe.edu.upc.llamapaytf.entities;

import jakarta.persistence.*;


@Entity
@Table(name = "Product")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Producto_id;
    @Column(name = "Nombre_producto", nullable = false, length = 30)
    private String Nombre_producto;
    @Column(name = "Descripcion", nullable = false, length = 50)
    private String Descripcion;
    @Column(name = "Unidad_medida", nullable = false, length = 20)
    private String Unidad_medida;
    @Column(name = "Precio_Producto", nullable = false, length = 10)
    private int Precio_Producto;
    @ManyToOne
    @JoinColumn(name = "Usuario_id", nullable = false)
    private Usuario Usuario_id;
    @ManyToOne
    @JoinColumn(name = "Tienda_id", nullable = false)
    private Tienda Tienda_id;

    public Producto() {
    }

    // Constructor completo
    public Producto(int Producto_id, String Nombre_producto, String Descripcion, String Unidad_medida, int Precio_Producto, User usuario, Tienda tienda) {
        this.Producto_id = Producto_id;
        this.Nombre_producto = Nombre_producto;
        this.Descripcion = Descripcion;
        this.Unidad_medida = Unidad_medida;
        this.Precio_Producto = Precio_Producto;
        this.Usuario_id = Usuario_id;
        this.Tienda_id = Tienda_id;
    }

    // Getters y Setters
    public int getProducto_id() {
        return Producto_id;
    }

    public void setProducto_id(int Producto_id) {
        this.Producto_id = Producto_id;
    }

    public String getNombre_producto() {
        return Nombre_producto;
    }

    public void setNombre_producto(String Nombre_producto) {
        this.Nombre_producto = Nombre_producto;
    }

    public String getDescripcion() {
        return Descripcion;
    }

    public void setDescripcion(String Descripcion) {
        this.Descripcion = Descripcion;
    }

    public String getUnidad_medida() {
        return Unidad_medida;
    }

    public void setUnidad_medida(String Unidad_medida) {
        this.Unidad_medida = Unidad_medida;
    }

    public int getPrecio_Producto() {
        return Precio_Producto;
    }

    public void setPrecio_Producto(int Precio_Producto) {
        this.Precio_Producto = Precio_Producto;
    }

    public Usario getUsuario() {
        return Usuario_id;
    }

    public void setUsuario(Usuario Usuario_id) {
        this.Usuario_id = Usuario_id;
    }

    public Tienda getTienda() {
        return Tienda_id;
    }

    public void setTienda(Tienda Tienda_id) {
        this.Tienda_id = Tienda_id;
    }
}
