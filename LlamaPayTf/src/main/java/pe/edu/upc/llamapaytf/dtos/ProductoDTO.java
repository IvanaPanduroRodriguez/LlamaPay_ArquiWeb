package upc.edu.pe.llamapaytf.dtos;

public class ProductoDTO {
    private int Producto_id;
    private String Nombre_producto;
    private String Descripcion;
    private String Unidad_medida;
    private int Precio_Producto;
    private Usuario Usuario_id;
    private Tienda Tienda_id;
}
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
