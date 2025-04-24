package pe.edu.upc.llamapaytf.dtos;

public class MetodoPagoDTO {
    private int id;
    private String nombreMetodoPago;
    private String tipoMetodoPago;
    private String descripcion;

    public MetodoPagoDTO() {}

    public MetodoPagoDTO(int id, String nombreMetodoPago, String tipoMetodoPago, String descripcion) {
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

