package pe.edu.upc.llamapaytf.dtos;

public class TipoTransaccionDTO {

    private int tipoGastoId;
    private String descripcion;

    // Constructor vacío
    public TipoTransaccionDTO() {
    }

    // Constructor completo
    public TipoTransaccionDTO(int tipoGastoId, String descripcion) {
        this.tipoGastoId = tipoGastoId;
        this.descripcion = descripcion;
    }

    // Getters y Setters
    public int getTipoGastoId() {
        return tipoGastoId;
    }

    public void setTipoGastoId(int tipoGastoId) {
        this.tipoGastoId = tipoGastoId;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}