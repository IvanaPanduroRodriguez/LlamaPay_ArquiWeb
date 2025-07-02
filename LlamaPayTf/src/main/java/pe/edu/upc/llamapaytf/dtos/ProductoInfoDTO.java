package pe.edu.upc.llamapaytf.dtos;

public class ProductoInfoDTO {
    private String nombreproducto;
    private int totalunidades;
    private int precioproducto;
    private String nombretienda;

    public String getNombreproducto() {
        return nombreproducto;
    }

    public void setNombreproducto(String nombreproducto) {
        this.nombreproducto = nombreproducto;
    }

    public int getTotalUnidades() {
        return totalunidades;
    }

    public void setTotalUnidades(int totalunidades) {
        this.totalunidades = totalunidades;
    }

    public int getPrecioproducto() {
        return precioproducto;
    }

    public void setPrecioproducto(int precioproducto) {
        this.precioproducto = precioproducto;
    }

    public String getNombretienda() {
        return nombretienda;
    }

    public void setNombretienda(String nombretienda) {
        this.nombretienda = nombretienda;
    }
}
