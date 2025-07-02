package pe.edu.upc.llamapaytf.dtos;

import jakarta.persistence.Column;
import pe.edu.upc.llamapaytf.entities.Tienda;
import pe.edu.upc.llamapaytf.entities.User;

public class ProductoDTO {
    private int idproducto;
    private String nombreproducto;
    private String descripcion;
    private String unidadmedida;
    private int precioproducto;
    private Tienda tienda;
    private User user;

    public Tienda getTienda() {
        return tienda;
    }

    public void setTienda(Tienda tienda) {
        this.tienda = tienda;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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
}
