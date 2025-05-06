package pe.edu.upc.llamapaytf.dtos;

import pe.edu.upc.llamapaytf.entities.Tienda;

public class ProductoInfoDTO {
    private int Producto_id;
    private String Nombre_producto;
    private String Descripcion;
    private String Unidad_medida;
    private int Precio_Producto;
    private int Usuario_id;
    private int Tienda_id;
    private int Total_Unidades;
    private String Nombre_tienda;

    public String getNombre_tienda() {
        return Nombre_tienda;
    }

    public void setNombre_tienda(String nombre_tienda) {
        Nombre_tienda = nombre_tienda;
    }

    public int getTotal_Unidades() {
        return Total_Unidades;
    }

    public void setTotal_Unidades(int total_Unidades) {
        Total_Unidades = total_Unidades;
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

    public int getUsuario_id() {
        return Usuario_id;
    }

    public void setUsuario_id(int Usuario_id) {
        this.Usuario_id = Usuario_id;
    }

    public int getTienda_id() {
        return Tienda_id;
    }

    public void setTienda_id(int Tienda_id) {
        this.Tienda_id = Tienda_id;
    }
}
