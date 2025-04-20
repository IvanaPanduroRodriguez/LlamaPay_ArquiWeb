package pe.edu.upc.llamapaytf.dtos;

public class TiendaDTO {
    private int Tienda_id;
    private String Nombre_tienda;
    private String Descripcion;
}
public int getTienda_id() {
    return Tienda_id;
}
public void setTienda_id(int Tienda_id) {
    this.Tienda_id = Tienda_id;
}
public String getNombre_tienda() {
    return Nombre_tienda;
}
public void setNombre_tienda(String Nombre_tienda) {
    this.Nombre_tienda = Nombre_tienda;
}
public String getDescripcion() {
    return Descripcion;
}
public void setDescripcion(String Descripcion) {
    this.Descripcion = Descripcion;
}
}